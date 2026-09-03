"use server";

import { briefUpload, budgets, businessTypes, deadlines, features } from "@/content/brief";
import type { BriefOption } from "@/content/brief";
import { getPayloadClient } from "@/lib/payload";

export interface BriefFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const MAX_FILE_BYTES = briefUpload.maxFileSizeMB * 1024 * 1024;

function pickOption<T extends readonly BriefOption[]>(
  formData: FormData,
  field: string,
  options: T,
): T[number]["value"] | undefined {
  const value = String(formData.get(field) ?? "");
  return options.some((option) => option.value === value)
    ? (value as T[number]["value"])
    : undefined;
}

function isAcceptedMime(type: string): boolean {
  return briefUpload.accept.some((accepted) =>
    accepted.endsWith("/*") ? type.startsWith(accepted.slice(0, -1)) : type === accepted,
  );
}

export async function submitBrief(
  _prev: BriefFormState,
  formData: FormData,
): Promise<BriefFormState> {
  try {
    // Honeypot: bots fill the hidden field, pretend success, store nothing.
    if (String(formData.get("website") ?? "").length > 0) {
      return { status: "success" };
    }

    const name = String(formData.get("name") ?? "").trim();
    const whatsapp = String(formData.get("whatsapp") ?? "").replace(/[^\d+]/g, "");
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || whatsapp.length < 8) {
      return { status: "error", message: "Nama dan nomor WhatsApp wajib diisi." };
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { status: "error", message: "Format email tidak valid." };
    }

    const selectedFeatures = formData
      .getAll("features")
      .map(String)
      .filter((value): value is (typeof features)[number]["value"] =>
        features.some((option) => option.value === value),
      );

    const files = formData
      .getAll("attachments")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length > briefUpload.maxFiles) {
      return { status: "error", message: `Maksimal ${briefUpload.maxFiles} file.` };
    }
    for (const file of files) {
      if (file.size > MAX_FILE_BYTES) {
        return {
          status: "error",
          message: `File "${file.name}" melebihi ${briefUpload.maxFileSizeMB}MB.`,
        };
      }
      if (!isAcceptedMime(file.type)) {
        return { status: "error", message: `Tipe file "${file.name}" tidak didukung.` };
      }
    }

    const payload = await getPayloadClient();

    const attachments: number[] = [];
    for (const file of files) {
      const uploaded = await payload.create({
        collection: "lead-files",
        data: {},
        file: {
          data: Buffer.from(await file.arrayBuffer()),
          name: file.name,
          mimetype: file.type,
          size: file.size,
        },
      });
      attachments.push(uploaded.id);
    }

    await payload.create({
      collection: "leads",
      data: {
        name,
        whatsapp,
        email: email || undefined,
        businessType: pickOption(formData, "businessType", businessTypes),
        budget: pickOption(formData, "budget", budgets),
        deadline: pickOption(formData, "deadline", deadlines),
        features: selectedFeatures,
        message: message || undefined,
        attachments,
      },
    });

    return { status: "success" };
  } catch (error) {
    console.error("submitBrief failed:", error);
    return {
      status: "error",
      message: "Terjadi kesalahan saat mengirim. Coba lagi, atau hubungi kami via WhatsApp.",
    };
  }
}
