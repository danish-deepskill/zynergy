import { featuresSection } from "@/content/features";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureExplorer } from "@/components/features/FeatureExplorer";

export function Features() {
  return (
    <Section id="fitur" tone="soft">
      <SectionHeading
        badge={featuresSection.badge}
        title={featuresSection.title}
        subtitle={featuresSection.subtitle}
      />
      <FeatureExplorer />
    </Section>
  );
}
