import type { Metadata } from 'next';

import GlobalStyle from '@/styles/globals';
import { fontDefault } from "@/styles/config";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: 'HorizonBank',
  description: 'HorizonBank é um projeto feito em NextJS e NestJS, baseado em um banco.',
  applicationName: 'HorizonBank',
  authors: { name: 'drexdev', url: 'https://drexdev.tech' },
  colorScheme: 'light'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className={fontDefault.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
