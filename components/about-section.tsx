import { Cpu, Globe, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Discover groundbreaking technologies and innovative solutions from leading researchers and startups.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals, academics, and fellow tech enthusiasts from around the world.",
  },
  {
    icon: Cpu,
    title: "Tech Workshops",
    description: "Hands-on sessions covering AI, machine learning, cybersecurity, and emerging technologies.",
  },
  {
    icon: Globe,
    title: "Global Perspectives",
    description: "Gain insights from international speakers and understand global technology trends.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About the Event</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Where Innovation Meets Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            COMPUFEST is YachayTech University&apos;s flagship technology event, bringing together 
            the brightest minds in computing, artificial intelligence, and digital innovation. 
            Join us for three days of inspiring talks, workshops, and networking opportunities 
            that will shape your understanding of tomorrow&apos;s technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Speakers" },
            { value: "1000+", label: "Attendees" },
            { value: "30+", label: "Workshops" },
            { value: "3", label: "Days" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-muted-foreground uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
