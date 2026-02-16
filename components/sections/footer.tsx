import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="font-serif text-3xl font-bold md:text-4xl text-balance">
          {"Agende Sua Conversa"}
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 text-pretty">
          {"Esta pronto para dar o proximo passo com seguranca? Entre em contato pelo WhatsApp. Atendo com agilidade no Tatuape."}
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:ring-offset-2 focus:ring-offset-primary"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>

      {/* Legal bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-6 text-center text-sm text-primary-foreground/50 lg:px-8">
          <p>{"Dra. Bethania | CRP 06/XXXXX"}</p>
          <p>{"Tatuape, Zona Leste - Sao Paulo, SP"}</p>
          <p className="mt-2 text-xs text-primary-foreground/30">
            {"2026 Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
