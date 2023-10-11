import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'HorizonBank',
  description: 'HorizonBank é um projeto feito em NextJS e NestJS, baseado em um banco.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
