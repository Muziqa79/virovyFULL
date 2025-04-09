"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎧 Welcome to Virovy</h1>
      <p>Spot viral unsigned songs before they blow up.</p>

      <nav style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/search">🔍 Search</Link>
        <Link href="/login">🔑 Login</Link>
        <Link href="/account">👤 Account</Link>
        <Link href="/genre">🎵 Genre</Link>
        <Link href="/trending">📈 Trending</Link>
        <Link href="/export">📤 Export</Link>
      </nav>
    </main>
  );
}
