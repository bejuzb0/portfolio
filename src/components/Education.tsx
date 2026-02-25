import { DATA } from "@/data/resume";
import { Section } from "./ui/section";

export function Education() {
    return (
        <Section>
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="flex flex-col gap-6">
                {DATA.education.map((edu, id) => (
                    <div key={id} className="flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{edu.school}</h3>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 flex-shrink-0">{edu.start} - {edu.end}</span>
                        </div>
                        <div className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{edu.degree}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{edu.description}</div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
