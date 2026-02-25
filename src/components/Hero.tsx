import { DATA } from "@/data/resume";
import { Mail, MapPin, FileText, Linkedin } from "lucide-react";
import React from "react";

export function Hero() {
    return (
        <section className="flex flex-col-reverse gap-8 py-12 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-4 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm {DATA.name.split(' ')[0]} 👋
                </h1>
                <p className="max-w-[600px] text-lg text-zinc-600 dark:text-zinc-400 mx-auto md:mx-0">
                    {DATA.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 md:justify-start">
                    <MapPin className="size-4" />
                    <a href={DATA.locationLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-50">
                        {DATA.location}
                    </a>
                </div>
                <div className="flex gap-4 justify-center md:justify-start mt-4">
                    <a
                        href={`mailto:${DATA.contact.email}`}
                        className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                    >
                        <Mail className="size-4 mr-2" />
                        Email me
                    </a>
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <a
                            key={name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                        >
                            {name === "LinkedIn" && <Linkedin className="size-4 mr-2" />}
                            {name}
                        </a>
                    ))}
                    {DATA.contact.resumeUrl && (
                        <a
                            href={DATA.contact.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                        >
                            <FileText className="size-4 mr-2" />
                            Resume
                        </a>
                    )}
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <div className="relative size-32 md:size-40 overflow-hidden rounded-full border-4 border-zinc-100 dark:border-zinc-800 flex-shrink-0">
                    {DATA.avatarUrl ? (
                        <img
                            src={DATA.avatarUrl}
                            alt={DATA.name}
                            className="w-full h-full object-cover scale-[2.25] object-[center_30%] hover:scale-[2.35] transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex size-full items-center justify-center bg-zinc-200 text-4xl md:text-5xl font-bold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            {DATA.initials}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
