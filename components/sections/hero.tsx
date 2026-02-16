import Image from "next/image"
import { MessageCircle, MapPin, Monitor } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linen-texture">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-20 pt-12 lg:flex-row lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-start animate-fade-in-up">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-secondary/40 bg-card px-4 py-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">
              Tatuape, SP
            </span>
            <span className="text-muted-foreground/40">|</span>
            <Monitor className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">
              Online
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl text-balance">
            {"Avaliacao Psicologica para Cirurgia Bariatrica no Tatuape"}
          </h1>

          <h2 className="mt-6 font-serif text-xl font-medium text-secondary md:text-2xl">
            {"Decida com Clareza e Seguranca."}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            {"Psicologa especialista com 20 anos de experiencia em laudos para cirurgias (Bariatrica, Laqueadura e Vasectomia). Atendimento proximo ao Metro Tatuape e Shopping Analia Franco (ou Online)."}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            {"Nao entrego apenas um \"papel\". Entrego orientacao pratica sobre o pre e pos-operatorio, acolho suas duvidas e forneco toda a documentacao tecnica exigida."}
          </p>

          <p className="mt-4 font-serif text-lg font-medium italic text-primary">
            {"Promessa: Voce nao vai se sentir sozinha(o) no pos-operatorio."}
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar Avaliacao pelo WhatsApp
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            {"Atendimento Particular | Presencial e Online com Validade Juridica."}
          </p>
        </div>

        {/* Right image — floating with elegant double border */}
        <div className="relative flex flex-1 items-center justify-center animate-fade-in-up-delay-2">
          {/* Decorative offset border */}
          <div className="absolute -bottom-5 -right-5 h-[calc(100%-1rem)] w-[calc(100%-1rem)] max-w-md rounded-3xl border-2 border-secondary/40" />
          {/* Secondary offset */}
          <div className="absolute -bottom-2 -right-2 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] max-w-md rounded-3xl bg-secondary/10" />
          {/* Main image */}
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-secondary/20">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Dra. Bethania - Psicologa Especialista"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
