import Image from "next/image"
import { Quote } from "lucide-react"

export function Promise() {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Subtle divider */}
      <div className="mx-auto mb-16 h-px w-24 bg-secondary/50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left — Text content */}
          <div className="flex-1 animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
              {"Muito Mais Que Um Laudo: Blindagem Emocional"}
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              {"A avaliacao nao e um \"tribunal\" para te aprovar ou reprovar. E o momento de entender sua jornada e blindar a sua mente. Muitos pacientes operam o estomago, mas esquecem de operar a cabeca — e sofrem depois."}
            </p>

            {/* Editorial quote block */}
            <div className="relative mt-10 max-w-xl rounded-2xl border border-secondary/20 bg-card px-8 py-10 shadow-xl md:px-12">
              <Quote className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-background p-1 text-secondary" />
              <blockquote className="font-serif text-lg italic leading-relaxed text-primary md:text-xl text-pretty">
                {"\"Eu nao sou uma juiza que da bronca. Eu sou a ponte que te prepara para o que ninguem conta e garante que voce nao sera abandonada(o) quando a cirurgia acabar.\""}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-secondary/50" />
                <span className="text-sm font-medium text-secondary">
                  Dra. Bethania
                </span>
                <div className="h-px w-8 bg-secondary/50" />
              </div>
            </div>
          </div>

          {/* Right — Consultorio image */}
          <div className="flex flex-1 items-center justify-center animate-fade-in-up-delay-2">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-1 ring-secondary/15">
              <Image
                src="/images/consultorio.jpg"
                alt="Ambiente acolhedor do consultorio da Dra. Bethania"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
