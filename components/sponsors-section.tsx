const sponsors = {
  gold: [
    { name: "TechCorp Global", logo: "TCG" },
    { name: "InnovateTech", logo: "IT" },
  ],
  silver: [
    { name: "DataSystems", logo: "DS" },
    { name: "CloudFirst", logo: "CF" },
    { name: "AI Solutions", logo: "AI" },
  ],
  bronze: [
    { name: "DevTools Inc", logo: "DT" },
    { name: "CodeLabs", logo: "CL" },
    { name: "NetSecure", logo: "NS" },
    { name: "ByteWorks", logo: "BW" },
  ],
}

function SponsorTier({ 
  title, 
  sponsors, 
  tierColor,
  size = "large" 
}: { 
  title: string
  sponsors: { name: string; logo: string }[]
  tierColor: string
  size?: "large" | "medium" | "small"
}) {
  const sizeClasses = {
    large: "w-40 h-24 text-2xl",
    medium: "w-32 h-20 text-xl",
    small: "w-28 h-16 text-lg",
  }

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 mb-8">
        <div className={`w-3 h-3 rounded-full ${tierColor}`} />
        <h3 className="text-lg font-semibold text-foreground uppercase tracking-widest">{title}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className={`${sizeClasses[size]} bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/50 transition-all duration-300 group`}
          >
            <span className={`font-bold text-muted-foreground group-hover:text-foreground transition-colors`}>
              {sponsor.logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Partners</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Sponsors & Partners
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            COMPUFEST is made possible by the generous support of our sponsors 
            who share our vision of advancing technology education.
          </p>
        </div>

        <div className="space-y-16">
          <SponsorTier 
            title="Gold Sponsors" 
            sponsors={sponsors.gold} 
            tierColor="bg-yellow-500"
            size="large"
          />
          <SponsorTier 
            title="Silver Sponsors" 
            sponsors={sponsors.silver} 
            tierColor="bg-gray-400"
            size="medium"
          />
          <SponsorTier 
            title="Bronze Sponsors" 
            sponsors={sponsors.bronze} 
            tierColor="bg-amber-700"
            size="small"
          />
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-secondary/50 border border-border rounded-2xl p-6 sm:p-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground">Interested in sponsoring?</h4>
              <p className="text-muted-foreground text-sm mt-1">Join our roster of industry-leading partners.</p>
            </div>
            <a 
              href="mailto:sponsors@compufest.edu"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
