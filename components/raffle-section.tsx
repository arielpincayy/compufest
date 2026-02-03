import { Ticket, Gamepad2, Smartphone, FlaskConical, Star, Gift } from "lucide-react"

const requirements = [
    {
        icon: Gamepad2,
        zone: "Zone 1 (Fundamentals)",
        requirement: "Played a video game or solved a puzzle.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
        icon: Smartphone,
        zone: "Zone 2 (Software)",
        requirement: "Tested an App.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
        icon: FlaskConical,
        zone: "Interdisciplinary",
        requirement: "Visited a Chemistry/Bio project with CS.",
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
        icon: Star,
        zone: '"Star" Seal',
        requirement: "Awarded for attending a talk or workshop.",
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
]

export function RaffleSection() {
    return (
        <section id="raffle" className="py-24 sm:py-32 bg-secondary/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <Gift className="w-4 h-4" /> Grand Raffle!
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                            Raffle Mechanics
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Don't miss the chance to win amazing prizes like <strong>headphones, tablets, and exclusive courses</strong>!
                            To participate, you just need to complete your passport with the seals from our different zones.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {requirements.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${item.color}`}
                                >
                                    <item.icon className="w-8 h-8 mb-4" />
                                    <h3 className="font-bold text-foreground mb-2">{item.zone}</h3>
                                    <p className="text-sm opacity-80">{item.requirement}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Main card */}
                            <div className="absolute inset-16 flex items-center justify-center">
                                <div className="w-full aspect-square bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Ticket className="w-24 h-24 text-primary mb-6 animate-bounce" />
                                    <h4 className="text-2xl font-bold mb-2">Compufest Passport</h4>
                                    <p className="text-muted-foreground text-sm">Collect 4 seals and deposit your ticket in the main raffle drum.</p>
                                    <div className="mt-8 flex gap-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-xs font-bold text-muted-foreground/30">
                                                {i}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
