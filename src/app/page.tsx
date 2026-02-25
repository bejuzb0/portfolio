import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Hobbies } from "@/components/Hobbies";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 px-4 md:px-0 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-3xl mx-auto py-12 sm:py-24 flex flex-col gap-12 sm:gap-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Hobbies />
      </div>
    </main>
  );
}
