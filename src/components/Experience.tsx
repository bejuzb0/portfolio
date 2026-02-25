import { DATA } from "@/data/resume";
import { Section } from "./ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
    return (
        <Section>
            <h2 className="text-xl font-bold mb-2">Work Experience</h2>
            <div className="flex flex-col gap-4">
                {DATA.work.map((work, id) => (
                    <Card key={id} className="border-none shadow-none bg-transparent">
                        <CardHeader className="px-0 py-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                                <CardTitle className="text-lg">
                                    {work.href ? (
                                        <a href={work.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {work.company}
                                        </a>
                                    ) : (
                                        work.company
                                    )}
                                </CardTitle>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400 flex-shrink-0">
                                    {work.start} - {work.end}
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-base font-medium mt-1">
                                <span className="text-zinc-700 dark:text-zinc-300">{work.title}</span>
                                <span className="text-sm text-zinc-500 dark:text-zinc-400">{work.location}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-0 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                {work.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
