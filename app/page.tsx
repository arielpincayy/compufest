import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AgendaSection } from "@/components/agenda-section"
import { RaffleSection } from "@/components/raffle-section"
import { ZonesSection } from "@/components/zones-section"
import { VotingSection } from "@/components/voting-section"
import { SpeakersSection } from "@/components/speakers-section"
import { JudgesSection } from "@/components/judges-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AgendaSection />
      <ZonesSection />
      <RaffleSection />
      <VotingSection />
      <SpeakersSection />
      <JudgesSection />
      <SponsorsSection />
      <Footer />
    </main>
  )
}
