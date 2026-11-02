import Link from 'next/link'

export function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      <a href="https://read.cv/sable" target="_blank" rel="noreferrer">CV</a>
    </nav>
  )
}
