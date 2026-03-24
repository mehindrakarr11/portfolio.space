import { GradientBackdrop } from "@/components/layout/GradientBackdrop";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LinkedInSection } from "@/components/sections/LinkedInSection";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ChatbotPlaceholder } from "@/components/ui/ChatbotPlaceholder";
import { sectionInner, sectionShell } from "@/lib/ui-classes";
import dynamic from "next/dynamic";

const GitHubSection = dynamic(
  () =>
    import("@/components/sections/GitHubSection").then((m) => ({
      default: m.GitHubSection,
    })),
  {
    loading: () => (
      <section id="github" className={sectionShell} aria-hidden>
        <div className={`${sectionInner} animate-pulse space-y-6`}>
          <div className="h-8 w-48 rounded-lg bg-black/10 dark:bg-white/10" />
          <div className="h-40 rounded-3xl bg-black/5 dark:bg-white/10" />
          <div className="h-40 rounded-3xl bg-black/5 dark:bg-white/10" />
        </div>
      </section>
    ),
  },
);

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <GradientBackdrop />
      <Header />
      <main className="relative z-10 flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <GitHubSection />
        <Skills />
        <LinkedInSection />
        <Contact />
      </main>
      <ChatbotPlaceholder />
    </>
  );
}
