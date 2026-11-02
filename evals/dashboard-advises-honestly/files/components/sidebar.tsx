import Link from 'next/link'

export function Sidebar() {
  return (
    <aside>
      <Link href="/">Overview</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/orders?status=pending">Pending</Link>
      <Link href="/orders?status=refunded">Refunds</Link>
      <Link href="/users">Users</Link>
      <Link href="/settings">Settings</Link>
    </aside>
  )
}
