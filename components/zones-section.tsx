"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Info, Code, Layers, BrainCircuit } from "lucide-react"

const zones = [
    {
        id: "zone1",
        name: "ZONE 1: Fundamentals",
        projectsCount: 7,
        subjectsCount: 4,
        subjects: [
            {
                name: "Introduction to Programming",
                slots: 2,
                requirements: [
                    "Explanation purely in the computational field",
                    "VISUAL",
                    "Understandable for the public",
                    "Note: No terminal outputs allowed"
                ]
            },
            {
                name: "Numerical Methods + Multilinear Algebra + Advanced Math",
                slots: 2,
                requirements: [
                    "SIMULATION",
                    "VISUAL",
                    "Note: No terminal outputs allowed"
                ]
            },
            {
                name: "Optimization",
                slots: 1,
                requirements: [
                    "Easy to understand",
                    "VISUAL"
                ]
            },
            {
                name: "Algorithm Analysis",
                slots: 2,
                requirements: [
                    "Same requirements apply (visual, understandable, no terminal outputs)"
                ]
            }
        ]
    },
    {
        id: "zone2",
        name: "ZONE 2: Software & Systems",
        projectsCount: 11,
        subjectsCount: 7,
        subjects: [
            { name: "Advanced Programming", slots: 2, requirements: ["Standard requirements (Visual, no terminal)"] },
            { name: "Computer Architecture", slots: 2, requirements: ["Standard requirements"] },
            { name: "Electronics", slots: 1, requirements: ["Standard requirements"] },
            { name: "NETWORKING", slots: 1, requirements: ["Terminal management"] },
            { name: "Databases", slots: 1, requirements: ["Standard requirements"] },
            { name: "Computer Systems Admin", slots: 1, requirements: ["Standard requirements"] },
            { name: "Operating Systems", slots: 1, requirements: ["Standard requirements"] },
            { name: "Distributed Systems", slots: 1, requirements: ["Explain it", "Standard requirements"] },
            { name: "Software Engineering", slots: 1, requirements: ["Explain it", "Standard requirements"] }
        ]
    },
    {
        id: "zone3",
        name: "ZONE 3: AI & Emerging Technologies",
        projectsCount: 8,
        subjectsCount: 6,
        subjects: [
            { name: "AI", slots: 1, requirements: ["Standard requirements"] },
            { name: "Neural Networks", slots: 1, requirements: ["Standard requirements"] },
            { name: "Computer Vision", slots: 3, requirements: ["Standard requirements"] },
            { name: "Mobile App Development", slots: 1, requirements: ["Standard requirements"] },
            { name: "Mobile & Wireless Networks", slots: 1, requirements: ["Standard requirements"] },
            { name: "NLP", slots: 1, requirements: ["Standard requirements"] }
        ]
    }
]

export function ZonesSection() {
    return (
        <section id="zones" className="py-24 sm:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest">Expo & Projects</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                        Tentative Zones and Subjects
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Explore the diversity of projects organized by areas of knowledge.
                        Each zone represents a fundamental pillar of our program.
                    </p>
                </div>

                <Tabs defaultValue="zone1" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto bg-secondary/20 p-1">
                        <TabsTrigger value="zone1" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <Code className="w-4 h-4 mr-2" /> Zone 1: Fundamentals
                        </TabsTrigger>
                        <TabsTrigger value="zone2" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <Layers className="w-4 h-4 mr-2" /> Zone 2: Software
                        </TabsTrigger>
                        <TabsTrigger value="zone3" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <BrainCircuit className="w-4 h-4 mr-2" /> Zone 3: AI & Emerging
                        </TabsTrigger>
                    </TabsList>

                    {zones.map((zone) => (
                        <TabsContent key={zone.id} value={zone.id} className="mt-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1">
                                    <div className="bg-card border border-border rounded-2xl p-8 sticky top-24">
                                        <h3 className="text-2xl font-bold mb-4">{zone.name}</h3>
                                        <div className="space-y-4 mb-8">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground">Total Projects</span>
                                                <Badge variant="secondary">{zone.projectsCount}</Badge>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground">Participating Subjects</span>
                                                <Badge variant="secondary">{zone.subjectsCount}</Badge>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mb-6">
                                            <div className="flex gap-3 text-sm leading-relaxed">
                                                <Info className="w-5 h-5 text-primary shrink-0" />
                                                <p className="text-muted-foreground">
                                                    Projects must be highly visual and easy to understand for the general public.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 space-y-4">
                                    {zone.subjects.map((subject, sIdx) => (
                                        <div key={sIdx} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{subject.name}</h4>
                                                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                                    {subject.slots} {subject.slots === 1 ? 'Slot' : 'Slots'}
                                                </Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-muted-foreground mb-1">Requirements:</p>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                                    {subject.requirements.map((req, rIdx) => (
                                                        <li key={rIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
