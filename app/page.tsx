import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ResearchSection,
  SkillsSection,
  WorkSection,
} from "./components/home";
import { Reveal } from "./components/ui";
import { buildPageMetadata, seo } from "@/content";

export const metadata = buildPageMetadata(seo.home);

export default function Home() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <WorkSection />
      </Reveal>
      <Reveal>
        <ResearchSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
