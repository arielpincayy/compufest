import { Award } from "lucide-react"

const judges = [
  {
    name: "Dr. Amanda Foster",
    role: "Dean of Engineering",
    institution: "YachayTech University",
    expertise: "Artificial Intelligence",
  },
  {
    name: "Robert Kim",
    role: "Senior Technical Director",
    institution: "Google DeepMind",
    expertise: "Machine Learning",
  },
  {
    name: "Dr. Patricia Mendez",
    role: "Innovation Director",
    institution: "IEEE Ecuador Section",
    expertise: "IoT & Embedded Systems",
  },
  {
    name: "Thomas Bradley",
    role: "Founder & CEO",
    institution: "TechVentures Capital",
    expertise: "Tech Startups",
  },
]

export function JudgesSection() {
  return (
    <section id="judges" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Competition Judges</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Expert Panel of Judges
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our distinguished panel of judges brings expertise from academia, industry, 
            and entrepreneurship to evaluate innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge) => (
            <div
              key={judge.name}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Award badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">
                  {judge.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground">{judge.name}</h3>
              <p className="text-primary text-sm mt-1">{judge.role}</p>
              <p className="text-muted-foreground text-sm">{judge.institution}</p>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Expertise</span>
                <p className="text-sm text-foreground mt-1">{judge.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
