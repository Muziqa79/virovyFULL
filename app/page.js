"use client";
import Link from 'next/link';
export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎧 Welcome to Virovy</h1>
      <p>Spot viral unsigned songs before they blow up.</p>
      <p><Link href="/search">Start Searching →</Link></p>
    </main>
  );
}