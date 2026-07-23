import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { StickyBar } from "@/components/landing/StickyBar";
import {
  BeforeAfterSection,
  Gallery,
  InstagramSection,
  Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/galerija")({
  component: GalerijaPage,
  head: () => ({
    meta: [
      { title: "Galerija radova — DP Poliranje i Pranje Ruma" },
      {
        name: "description",
        content:
          "Galerija obrađenih vozila: pre i posle poliranja, dubinskog pranja i keramičke zaštite. Rezultati DP Poliranja iz Rume.",
      },
      { property: "og:title", content: "Galerija radova — DP Poliranje i Pranje Ruma" },
      {
        property: "og:description",
        content:
          "Pre i posle: poliranje, dubinsko pranje i keramička zaštita vozila u Rumi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sr_RS" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function GalerijaPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF7F1] text-neutral-900 overflow-x-hidden">
      <Nav />
      <main className="pt-24 md:pt-28">
        <BeforeAfterSection />
        <Gallery />
        <InstagramSection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
