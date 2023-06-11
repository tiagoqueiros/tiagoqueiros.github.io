import './fonts.scss'
import './globals.scss'

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
      <body>{children}</body>
    </html>
  )
}
