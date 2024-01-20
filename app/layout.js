import ScrollToTop from "../components/ScrollToTop";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader";
import UseScrollToTop from "../hooks/useScrollToTop";
import "../css/App.css";
import "./globals.css";

export const metadata = {
  title: "Pawel Jędrasik - Portfolio",
  description: "Frontend Web & Mobile developer.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
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
