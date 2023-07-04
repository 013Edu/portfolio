import './globals.css'
import { DM_Sans } from 'next/font/google'

const inter = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'devedu.com',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
