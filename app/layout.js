import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader";
import BackToTop from "../components/shared/BackToTop";
import BackgroundFx from "../components/shared/BackgroundFx";
import MotionProvider from "../components/shared/MotionProvider";
import "./globals.css";
import { siteName, siteUrl } from "../lib/site";

const display = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Senior Full-Stack Developer with 8+ years of experience. React, TypeScript, React Native and AWS serverless.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Senior Full-Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: `${siteName} - Senior Full-Stack Developer`,
    description,
    url: siteUrl,
    siteName: `${siteName} - Portfolio`,
    images: [{ url: "/portfolio.jpg", width: 780, height: 680 }],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05060f",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${sans.variable}`}
    >
      <body>
        <MotionProvider>
          <BackgroundFx />
          <AppHeader />
          <div className="overflow-x-clip">
            <main className="min-h-screen">{children}</main>
            <AppFooter />
          </div>
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
