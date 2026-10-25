import { render, screen } from "@testing-library/react";
import AppBanner from "../components/shared/AppBanner";

test("it shows the greeting in the banner", () => {
  render(<AppBanner />);

  expect(
    screen.getByRole("heading", { name: /Hi, I'm Pawel Jedrasik/i })
  ).toBeInTheDocument();
});

test("the CV button downloads the resume PDF", () => {
  render(<AppBanner />);

  const downloadCV = screen.getByRole("link", { name: /download resume/i });

  expect(downloadCV).toHaveAttribute("href", "/files/resumePJ.pdf");
  expect(downloadCV).toHaveAttribute("download", "resumePJ.pdf");
});
