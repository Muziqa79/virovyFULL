"use client";
import Link from "next/link";

const genreList = [
  "Garage & Bassline",
  "DnB",
  "Pop",
  "Rap",
  "House & EDM",
  "Emerging Indie Hits",
  "Rising RnB & Soul"
];

export default function GenrePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>🎵 Explore Genres</h1>
      <p>Select a genre to view a dedicated subpage of unsigned viral tracks.</p>

      <ul style={{ marginTop: "1.5rem", paddingLeft: 0, listStyle: "none" }}>
        {genreList.map((genre, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Link href={`/genre/${encodeURIComponent(genre.toLowerCase().replace(/\s+/g, "-"))}`}>
              <strong>{genre}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
