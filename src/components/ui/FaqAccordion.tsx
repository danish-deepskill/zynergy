"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/landing";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          className="overflow-hidden rounded-2xl border border-line bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink transition-colors hover:text-primary sm:text-base">
              {item.question}
              <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
