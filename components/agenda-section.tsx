import { Clock, Users, GraduationCap, Building2 } from "lucide-react"

const agendaItems = [
    {
        time: "08:00 - 09:30",
        activity: '"Tech & Talks" Breakfast',
        alumni: "PROTAGONISTS. Exclusive breakfast + TED-style talks by Alumni.",
        schools: "Arrival and Registration",
        uni: "Final Stand Setup.",
    },
    {
        time: "09:30 - 10:00",
        activity: "Opening Ceremony",
        alumni: "Ribbon cutting and official photo.",
        schools: "Welcome at the Senecyt hall.",
        uni: "Ready at their zones.",
    },
    {
        time: "10:00 - 12:30",
        activity: "The Great Expo + Workshops",
        alumni: "JUDGES. Touring stands by zones for evaluation.",
        schools: "Visiting the stands",
        uni: "Presenting projects and demos.",
    },
    {
        time: "12:30 - 13:30",
        activity: "Free Lunch / Networking",
        alumni: "Lunch with Dean/Directors.",
        schools: "Lunch on campus (Food trucks/Dining hall).",
        uni: "Break / Shifts at stands.",
    },
    {
        time: "13:30 - 15:30",
        activity: "Pitch Finals (Hybrid)",
        alumni: "FINAL JURY. Evaluating Top 5 on the main stage.",
        schools: "Free visit to the Expo or departure.",
        uni: "The top 5 teams present on stage.",
    },
    {
        time: "15:30 - 16:30",
        activity: "Awards Ceremony and Raffle",
        alumni: "Corporate awards presentation.",
        schools: '"Passport" Raffle (if still present).',
        uni: "Celebration.",
    },
]

export function AgendaSection() {
    return (
        <section id="agenda" className="py-24 sm:py-32 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest">Schedule</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                        Minute-by-Minute Agenda
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        A day filled with innovation, networking, and technology designed for every attendee profile.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-secondary/10">
                                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider min-w-[140px]">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Time
                                    </div>
                                </th>
                                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider min-w-[200px]">
                                    Main Activity
                                </th>
                                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider min-w-[250px]">
                                    <div className="flex items-center gap-2">
                                        <Building2 className="w-4 h-4" /> Companies/Alumni
                                    </div>
                                </th>
                                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider min-w-[250px]">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" /> Schools (HS)
                                    </div>
                                </th>
                                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider min-w-[250px]">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" /> University Students
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {agendaItems.map((item, index) => (
                                <tr key={index} className="group hover:bg-secondary/5 transition-colors">
                                    <td className="p-6 text-sm font-medium text-foreground">
                                        {item.time}
                                    </td>
                                    <td className="p-6 text-sm">
                                        <span className="font-bold text-foreground block md:inline">{item.activity}</span>
                                    </td>
                                    <td className="p-6 text-sm text-muted-foreground leading-relaxed">
                                        {item.alumni}
                                    </td>
                                    <td className="p-6 text-sm text-muted-foreground leading-relaxed">
                                        {item.schools}
                                    </td>
                                    <td className="p-6 text-sm text-muted-foreground leading-relaxed">
                                        {item.uni}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
