import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 'standalone' pakuje minimalny serwer do .next/standalone, uruchamiany
  // przez `node server.js` — bez instalowania node_modules na docelowej maszynie.
  // Uwaga: public/ i .next/static NIE sa kopiowane automatycznie, patrz README.
  output: "standalone",
};

export default nextConfig;
