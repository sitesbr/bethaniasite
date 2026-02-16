import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Bethania | Avaliacao Psicologica para Cirurgia Bariatrica no Tatuape',
  description:
    'Psicologa especialista com 20 anos de experiencia em laudos para cirurgias (Bariatrica, Laqueadura e Vasectomia). Atendimento proximo ao Metro Tatuape e Shopping Analia Franco.',
}

export const viewport: Viewport = {
  themeColor: '#6B3E3E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
