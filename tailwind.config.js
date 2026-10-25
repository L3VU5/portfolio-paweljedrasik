module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05060f",
          900: "#090b18",
          800: "#0e1122",
          700: "#161a33",
        },
        brand: {
          violet: "#8b5cf6",
          blue: "#4f8dff",
          teal: "#2dd4bf",
        },
        warm: {
          amber: "#ffb347",
          coral: "#ff7a59",
        },
        muted: "#9aa0c0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(60px,40px,0) scale(1.15)" },
        },
        shimmer: { to: { backgroundPosition: "200% center" } },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(45,212,191,0.6)" },
          "70%": { boxShadow: "0 0 0 8px rgba(45,212,191,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(45,212,191,0)" },
        },
      },
      animation: {
        drift: "drift 24s ease-in-out infinite alternate",
        shimmer: "shimmer 10s linear infinite",
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 55s linear infinite",
        "spin-slow": "spin 9s linear infinite",
        "pulse-dot": "pulseDot 2s ease-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
