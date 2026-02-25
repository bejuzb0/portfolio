import { DATA } from "@/data/resume";
import { Section } from "./ui/section";
import { Badge } from "./ui/badge";

export function Skills() {
    return (
        <Section>
            <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill) => (
                    <Badge key={skill} className="px-3 py-1 text-sm rounded-lg" variant="default">
                        {skill}
                    </Badge>
                ))}
            </div>
        </Section>
    );
}
