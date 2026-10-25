const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so Turbopack does not pick up lockfiles from parent folders.
  turbopack: { root: path.join(__dirname) },
};

module.exports = nextConfig;
