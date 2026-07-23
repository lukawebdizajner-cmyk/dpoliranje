import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { StickyBar } from "@/components/landing/StickyBar";
import {
  Hero,
  Highlights,
  Services,
  Why,
  Vehicles,
  Process,
  Difference,
  Testimonials,
  FAQ,
  Contact,
  Footer,
  GalleryCTA,
  Transformations,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DP Poliranje i Pranje Ruma | Premium Auto Detailing" },
      {
        name: "description",
        content:
          "Profesionalno dubinsko pranje, poliranje, keramička zaštita i detailing vozila u Rumi. Automobili, kamioni, autobusi i motori. Pozovite 064 479 6133.",
      },
      { property: "og:title", content: "DP Poliranje i Pranje Ruma | Premium Auto Detailing" },
      {
        property: "og:description",
        content:
          "Premium detailing studio u Rumi — dubinsko pranje, poliranje, keramička zaštita i voskiranje za sve tipove vozila.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sr_RS" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#1c1712] text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Transformations />
        <GalleryCTA />
        <Why />
        <Vehicles />
        <Process />
        <GalleryCTA />
        <Difference />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
