import { Twitter, Linkedin, Globe } from "lucide-react"

const speakers = [
  {
    name: "Dr. Elena Martinez",
    role: "AI Research Director",
    company: "TechLabs Global",
    image: "/speakers/speaker-1.jpg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Prof. James Chen",
    role: "Computer Science Chair",
    company: "MIT",
    image: "/speakers/speaker-2.jpg",
    socials: { twitter: "#", linkedin: "#", website: "#" },
  },
  {
    name: "Sarah Thompson",
    role: "CTO",
    company: "CloudNine Systems",
    image: "/speakers/speaker-3.jpg",
    socials: { linkedin: "#", website: "#" },
  },
  {
    name: "Dr. Michael Okonkwo",
    role: "Quantum Computing Lead",
    company: "QuantumTech",
    image: "/speakers/speaker-4.jpg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Lisa Wang",
    role: "VP of Engineering",
    company: "DataFlow Inc",
    image: "/speakers/speaker-5.jpg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Dr. Carlos Rivera",
    role: "Cybersecurity Expert",
    company: "SecureNet",
    image: "/speakers/speaker-6.jpg",
    socials: { linkedin: "#", website: "#" },
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Featured Speakers</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Learn from Industry Leaders
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our carefully curated lineup of keynote speakers brings decades of combined experience 
            in technology, research, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {speaker.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{speaker.name}</h3>
                <p className="text-primary text-sm mt-1">{speaker.role}</p>
                <p className="text-muted-foreground text-sm">{speaker.company}</p>

                <div className="flex gap-3 mt-4">
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.socials.website && (
                    <a href={speaker.socials.website} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Website">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
