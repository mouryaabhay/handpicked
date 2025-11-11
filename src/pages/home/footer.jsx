"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-800">
      <p>Handpicked.dev © 2025 — Curated by Developers</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/about" className="hover:text-white">
          About
        </a>
        <a
          href="https://discord.gg/yourinvite"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Join Discord
        </a>
        <a
          href="https://forms.gle/..."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Submit Resource
        </a>
        <a
          href="https://github.com/..."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
