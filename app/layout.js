import ScrollToTop from "../components/ScrollToTop";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader";
import UseScrollToTop from "../hooks/useScrollToTop";
import "../css/App.css";
import "./globals.css";
import { siteName, siteUrl } from "../lib/site";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <ScrollToTop />
          <AppHeader />
          {children}
          <AppFooter />
          <UseScrollToTop />
        </div>
      </body>
    </html>
  );
}
