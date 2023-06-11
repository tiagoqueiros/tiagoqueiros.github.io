import './globals.scss'
import { unbounded, hankenGrotesk } from "@/app/fonts";

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
      <body className={`${unbounded.variable} ${hankenGrotesk.variable}`}>{children}</body>
    </html>
  )
}
