import type { Metadata } from "next";
import "./globals.css";
import { Provider } from '@/components/ui/provider'
import { Montserrat, Lato} from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: "PortFolio Leandro Alves",
  description: "Criado por Leandro Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
