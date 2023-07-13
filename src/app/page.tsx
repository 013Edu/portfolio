import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionPortfolio from "@/components/SectionPortfolio";
import WhatDoIDo from "@/components/WhatDoIDo";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutMe />
      <WhatDoIDo />
      <SectionPortfolio />
      <Footer />
    </main>
  )
}
