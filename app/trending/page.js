"use client";
import { useState } from "react";

const trendingMock = {
  "Garage & Bassline": [
    { title: "Bassline Fever", artist: "LowKey", score: 91 },
    { title: "Night Shift", artist: "NORA", score: 88 },
  ],
  "DnB": [
    { title: "Jungle Heat", artist: "DrumRiot", score: 94 },
    { title: "Pulse Roll", artist: "BassCore", score: 89 },
  ],
  "Pop": [
    { title: "Golden Hour", artist: "Lani", score: 96 },
    { title: "Echo", artist: "Thea Rae", score: 90 },
  ],
  "House & EDM": [
    { title: "Neon Dreams", artist: "DJ Flux", score: 93 },
    { title: "Rave On", artist: "EchoBit", score: 89 },
  ],
  "Emerging Indie Hits": [
    { title: "Canvas Heart", artist: "Fleur", score: 90 },
    { title: "Backyard Lights", artist: "June Tide", score: 87 },
  ],
  "Rising RnB & Soul": [
    { title: "Velvet Skin", artist: "Aria J", score: 92 },
    { title: "Late Night Call", artist: "Zion B", score: 88 },
  ]
};

function getBadge(score) {
  if (score >= 95) return "🔥 Viral";
  if (score >= 90) return "🧪 Early Trend";
  return "🟡 Gaining";
}

export default function TrendingPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("score");
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;

  const genres = Object.keys(trendingMock);

  let songsToShow = selectedGenre === "All"
    ? genres.flatMap((g) => trendingMock[g].map((s) => ({ ...s, genre: g })))
    : trendingMock[selectedGenre].map((s) => ({ ...s, genre: selectedGenre }));

  songsToShow.sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  const totalPages = Math.ceil(songsToShow.length / songsPerPage);
  const paginatedSongs = songsToShow.slice(
    (currentPage - 1) * songsPerPage,
    currentPage * songsPerPage
  );

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🔥 Trending Viral Songs</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          style={{ padding: "0.5rem" }}
        >
          <option value="All">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: "0.5rem" }}
        >
          <option value="score">Sort by Score</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div>
        {paginatedSongs.map((song, i) => (
          <div
            key={i}
            style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "1rem",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{song.title} — {song.artist}</h3>
            <p>Genre: {song.genre}</p>
            <p>Engagement Score: {song.score} <span>{getBadge(song.score)}</span></p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          style={{ marginRight: "1rem" }}
        >
          ◀ Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          style={{ marginLeft: "1rem" }}
        >
          Next ▶
        </button>
      </div>
    </main>
  );
}
