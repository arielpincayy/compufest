import { QrCode, Vote, Star, Users } from "lucide-react"

export function VotingSection() {
    return (
        <section id="voting" className="py-24 sm:py-32 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-card border border-border rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            <Vote className="w-8 h-8 text-primary" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Voting and Ratings
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                            Jury voting for the best projects.
                        </p>

                        <div className="w-full max-w-2xl">

                            {/* Jury Evaluation */}
                            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col items-center text-center group hover:border-primary/50 transition-all">
                                <div className="w-48 h-48 bg-white rounded-xl p-4 mb-6 relative group-hover:scale-105 transition-transform">
                                    {/* Placeholder for QR */}
                                    <div className="w-full h-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                                        <QrCode className="w-24 h-24 text-gray-400" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90">
                                        <p className="text-[10px] font-bold text-black uppercase tracking-widest text-center px-4">
                                            Exclusive access for qualified judges
                                        </p>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Jury Vote
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Judges will evaluate technique and presentation through our private platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
