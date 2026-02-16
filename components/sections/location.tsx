import { MapPin, Clock, MessageCircle, Phone } from "lucide-react"

export function Location() {
  return (
    <section className="py-20 lg:py-28 bg-linen-texture">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 text-center animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            {"Localizacao"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            {"Facil acesso pela Zona Leste de Sao Paulo"}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-secondary/50" />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left — Address, hours, CTA */}
          <div className="flex flex-1 flex-col justify-center animate-fade-in-up">
            <div className="rounded-2xl border border-secondary/15 bg-card p-8 shadow-xl lg:p-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/20 bg-background">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    Endereco
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Tatuape, Zona Leste
                    <br />
                    Sao Paulo, SP
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Proximo ao Metro Tatuape, Shopping Analia Franco e Shopping Boulevard
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-secondary/15" />

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/20 bg-background">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    Horarios
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Segunda a Sexta: 9h as 18h
                    <br />
                    Sabado: Sob agendamento
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-secondary/15" />

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/20 bg-background">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    Contato
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Atendimento Particular
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Presencial e Online (validade juridica nacional)
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Google Maps iframe */}
          <div className="flex flex-1 items-stretch animate-fade-in-up-delay-1">
            <div className="w-full overflow-hidden rounded-2xl border border-secondary/15 shadow-xl">
              <iframe
                title="Localizacao do consultorio da Dra. Bethania no Tatuape"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.774181988!2d-46.573!3d-23.5455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ecad4760ed1%3A0x349f7b08c1d2a3cf!2sTatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-square lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
