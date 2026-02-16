import { ShieldCheck, BookOpen, Heart } from "lucide-react"

const differentials = [
  {
    icon: ShieldCheck,
    title: "Autoridade Especializada",
    description:
      "Mais de 20 anos dedicados exclusivamente a avaliacoes cirurgicas. Conheco os protocolos dos principais hospitais e entrego a documentacao exata, sem erros burocraticos.",
  },
  {
    icon: BookOpen,
    title: "Psicoeducacao Real",
    description:
      "Explico o \"Luto da Comida\", o Dumping e as mudancas de humor. Voce entende o processo e o que esta acontecendo com seu corpo e mente — sem termos complicados e sem surpresas no pos.",
  },
  {
    icon: Heart,
    title: "Zero Julgamento",
    description:
      "Muitas mulheres tem medo de pedir Laqueadura e ouvir sermao. Aqui sua decisao e respeitada e validada tecnicamente. Voce sai com direcionamento real, nao com culpa.",
  },
]

export function Differentials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 text-center animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            {"Por que confiar?"}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-secondary/50" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-col items-start rounded-2xl border border-secondary/15 bg-card p-8 shadow-xl transition-all duration-300 hover:border-secondary/30 hover:shadow-2xl lg:p-10 animate-fade-in-up${index > 0 ? `-delay-${index}` : ""}`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary/20 bg-background">
                <item.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
