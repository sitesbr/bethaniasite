"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "A psicologa garante que vou ser aprovado?",
    answer:
      "Ninguem serio garante aprovacao automatica (isso e venda de laudo, o que e antietico). Eu garanto um processo justo, transparente e que, se houver algum impedimento, nos vamos tratar. Ninguem fica sem caminho ou direcao.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Em media 7 a 10 dias uteis. Temos agilidade com responsabilidade. Nao fazemos \"laudo a jato\" irresponsavel, mas tambem nao enrolamos com terapia infinita. O processo tem inicio, meio e fim.",
  },
  {
    question: "Aceita Online? O hospital aceita?",
    answer:
      "Sim! O atendimento online tem validade juridica nacional pelo Conselho Federal de Psicologia. Orientamos voce sobre como apresentar isso ao seu convenio/hospital sem riscos.",
  },
  {
    question: "Vou levar bronca ou ser julgado?",
    answer:
      "Jamais. Nosso consultorio e uma zona livre de julgamento. Voce esta ali para ser acolhido e orientado, nao para ser testado ou criticado.",
  },
  {
    question: "E se eu me arrepender da cirurgia?",
    answer:
      "E por isso que a avaliacao existe. Nos trabalhamos a \"Seguranca Racional\" antes do procedimento, para que voce tome a decisao com tanta clareza que o arrependimento se torne improvavel.",
  },
]

export function Faq() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            {"Perguntas Frequentes"}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-secondary/50" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-secondary/15 px-0"
            >
              <AccordionTrigger className="py-6 text-left font-serif text-lg font-semibold text-primary hover:text-secondary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
