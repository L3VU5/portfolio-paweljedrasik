// Import images
import WebImage1 from "../public/ww-marketing.jpg";
import WebImage2 from "../public/pt_marketing.jpg";
import Portfolio from "../public/portfolio.jpg";
import MobileImage1 from "../public/mobile-project-1.jpg";
import MobileImage2 from "../public/ptm-marketing.jpg";
import UIImage1 from "../public/ui-project-1.jpg";
import UIImage2 from "../public/ui-project-2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Portertrac",
    category: "Web Application",
    img: WebImage2,
    ProjectHeader: {
      title: "Project Management UI - From Context",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
  },
  {
    id: 2,
    title: "Portertrac iOS & Android",
    category: "Mobile Application",
    img: MobileImage2,
  },
  {
    id: 3,
    title: "RiskReady",
    category: "Web Application",
    img: WebImage2,
  },
  {
    id: 4,
    title: "Weather Wear",
    category: "Web Application",
    img: WebImage1,
  },
  {
    id: 5,
    title: "Portfolio App",
    category: "Web Application",
    img: Portfolio,
  },
];
