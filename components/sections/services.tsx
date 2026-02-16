import { ArrowRight, Stethoscope, Baby, UserCheck, type LucideIcon } from "lucide-react"

interface ServiceItem {
  title: string
  description: string
  tag: string
  icon: LucideIcon
}

const services: ServiceItem[] = [
  {
    title: "Avaliacao para Cirurgia Bariatrica",
    description:
      "Laudo tecnico para Bypass e Sleeve. O foco nao e so a liberacao, e preparar a mente para a nova vida, evitar a troca de compulsao e garantir estabilidade emocional.",
    tag: "Bariatrica",
    icon: Stethoscope,
  },
  {
    title: "Parecer para Laqueadura Tubaria",
    description:
      "Avaliacao de maturidade e autonomia. Documentacao pronta para convenios e hospitais, sem burocracia moralista. Respeito total a sua decisao.",
    tag: "Laqueadura",
    icon: Baby,
  },
  {
    title: "Parecer para Vasectomia",
    description:
      "Processo agil e pragmatico para homens decididos. Seguranca juridica e racionalidade para eliminar duvidas futuras.",
    tag: "Vasectomia",
    icon: UserCheck,
  },
]

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 text-center animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            {"Areas de Atuacao"}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-secondary/50" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.tag}
              className={`group flex flex-col rounded-2xl border border-secondary/15 bg-card p-8 shadow-xl transition-all duration-300 hover:border-secondary/30 hover:shadow-2xl lg:p-10 animate-fade-in-up${index > 0 ? `-delay-${index}` : ""}`}
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary/20 bg-background">
                <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>

              <div className="mb-4 inline-flex self-start rounded-full border border-secondary/30 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {service.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground text-pretty">
                {service.description}
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Agendar avaliacao
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
