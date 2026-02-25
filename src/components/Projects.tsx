"use client";

import { DATA } from "@/data/resume";
import { Section } from "./ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Approximating width of a card + gap
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <Section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="size-4" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>
            {/* 
              Horizontal scrolling container.
              Hide scrollbar utility class can be added to globals.css if needed, 
              but standard scrollbar hiding works via inline styles or custom tailwind variants. 
              Here we just use tailwind default overflow-x-auto.
            */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory 
                          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                {DATA.projects.map((project, id) => (
                    <Card
                        key={id}
                        className="flex flex-col flex-shrink-0 w-[300px] sm:w-[350px] snap-center overflow-hidden transition-all hover:shadow-md"
                    >
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
