import { DATA } from "@/data/resume";
import { Section } from "./ui/section";

export function About() {
    return (
        <Section>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-pretty">
                {DATA.summary}
            </p>
        </Section>
    );
}
