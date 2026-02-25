import { DATA } from "@/data/resume";
import { Section } from "./ui/section";
import { Card, CardTitle } from "./ui/card";

export function Hobbies() {
    return (
        <Section>
            <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DATA.hobbies.map((hobby, id) => {
                    const Icon = hobby.icon;
                    return (
                        <Card key={id} className="flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                            <Icon className="w-10 h-10 mb-4 text-zinc-700 dark:text-zinc-300" />
                            <CardTitle className="text-lg mb-2">{hobby.name}</CardTitle>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{hobby.description}</p>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
