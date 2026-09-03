import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BriefForm } from "./BriefForm";

export const metadata: Metadata = {
  title: "Brief Project",
  description:
    "Ceritakan kebutuhan website Anda. Tim Zynergy akan menghubungi Anda dengan rekomendasi dan penawaran terbaik.",
};

export default function BriefProjectPage() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge="Brief Project"
          title="Ceritakan Proyek Anda"
          subtitle="Isi form singkat ini agar kami memahami kebutuhan Anda. Tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam kerja. Gratis, tanpa komitmen."
        />
        <div className="mx-auto max-w-3xl">
          <BriefForm />
        </div>
      </Section>
    </div>
  );
}
