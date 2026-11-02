import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Solstice</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
