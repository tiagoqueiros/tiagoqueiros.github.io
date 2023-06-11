import './globals.scss'
import { unbounded, hankenGrotesk } from "@/app/fonts";

export const metadata = {
  title: 'Tiago Queirós ⚡️ Product Manager',
  description: 'Cross-Functional Leadership and Know-How. Turning Data into User-Centric Solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${hankenGrotesk.variable}`}>{children}</body>
    </html>
  )
}
