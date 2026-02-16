"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

const links = [
  { label: "Sobre", href: "#promessa" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Servicos", href: "#servicos" },
  { label: "FAQ", href: "#faq" },
  { label: "Localizacao", href: "#localizacao" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-secondary/10 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo slot */}
        <a href="#" className="relative block h-10 w-40 shrink-0">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-secondary/20 bg-card">
            <span className="font-serif text-sm font-bold text-primary">
              Dra. Bethania
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-secondary/10 bg-background px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
