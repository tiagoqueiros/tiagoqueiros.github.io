import './fonts.scss'
import './globals.scss'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiago Queirós ⚡️ Product Owner',
  description: 'Multidisciplinary digital creator from Porto, Portugal. Product Owner at Pixelmatters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
