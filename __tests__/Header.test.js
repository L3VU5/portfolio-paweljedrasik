import { render, screen } from "@testing-library/react";
import AppHeader from "../components/shared/AppHeader";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const { usePathname } = jest.requireMock("next/navigation");

test("the desktop navigation lists every section", () => {
  usePathname.mockReturnValue("/");
  render(<AppHeader />);

  const nav = screen.getByRole("navigation", { name: "Main" });
  for (const label of ["Home", "About", "Work", "Skills", "Contact"]) {
    expect(nav).toHaveTextContent(label);
  }
});

test("the current page is marked in the navigation", () => {
  usePathname.mockReturnValue("/projects/9");
  render(<AppHeader />);

  const nav = screen.getByRole("navigation", { name: "Main" });
  const current = nav.querySelector('[aria-current="page"]');
  expect(current).toHaveTextContent("Work");
});

test("the CV button downloads the resume PDF", () => {
  usePathname.mockReturnValue("/");
  render(<AppHeader />);

  const [cv] = screen.getAllByRole("link", { name: /download cv/i });
  expect(cv).toHaveAttribute("href", "/files/resumePJ.pdf");
  expect(cv).toHaveAttribute("download", "resumePJ.pdf");
});
