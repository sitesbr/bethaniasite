import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Promise } from "@/components/sections/promise"
import { Differentials } from "@/components/sections/differentials"
import { Services } from "@/components/sections/services"
import { Faq } from "@/components/sections/faq"
import { Location } from "@/components/sections/location"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="promessa">
        <Promise />
      </section>
      <section id="diferenciais">
        <Differentials />
      </section>
      <section id="servicos">
        <Services />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="localizacao">
        <Location />
      </section>
      <Footer />
    </main>
  )
}
