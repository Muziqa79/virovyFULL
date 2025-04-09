"use client";
import { useState } from "react";

const mockSongs = [
  {
    title: "Echoes of You",
    artist: "Nova",
    genre: "Pop",
    platform: "TikTok",
    score: 92,
    status: "early trend",
  },
  {
    title: "Underground Drift",
    artist: "Rekord",
    genre: "Garage & Bassline",
    platform: "SoundCloud",
    score: 87,
    status: "rising",
  },
  {
    title: "Moonlight Drive",
    artist: "Aeris",
    genre: "House & EDM",
    platform: "TikTok",
    score: 95,
    status: "viral",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("All");
  const [genre, setGenre] = useState("All");
  const [majorLabel, setMajorLabel] = useState(false);

  const filteredSongs = mockSongs.filter((song) => {
    return (
      (query === "" || song.title.toLowerCase().includes(query.toLowerCase())) &&
      (platform === "All" || song.platform === platform) &&
      (genre === "All" || song.genre === genre)
    );
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Search Viral Songs</h1>
      <input
        type="text"
        placeholder="Search song or artist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="All">All Platforms</option>
          <option value="TikTok">TikTok</option>
          <option value="SoundCloud">SoundCloud</option>
        </select>

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Pop">Pop</option>
          <option value="Garage & Bassline">Garage & Bassline</option>
          <option value="House & EDM">House & EDM</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={!majorLabel}
            onChange={() => setMajorLabel(!majorLabel)}
          />
          Unsigned Only
        </label>
      </div>

      <div>
        {filteredSongs.map((song, i) => (
          <div
            key={i}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          >
            <h3>{song.title} — {song.artist}</h3>
            <p>Genre: {song.genre}</p>
            <p>Platform: {song.platform}</p>
            <p>Engagement Score: {song.score}</p>
            <p>Status: {song.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
