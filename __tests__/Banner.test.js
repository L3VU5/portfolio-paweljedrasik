import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppBanner from "../components/shared/AppBanner";

test("it shows the headline and the role in the hero", () => {
  render(<AppBanner />);

  expect(
    screen.getByRole("heading", { level: 1, name: /I build fast, reliable products/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/Senior Full-Stack Developer/i)).toBeInTheDocument();
});

test("the hero links to the projects page", () => {
  render(<AppBanner />);

  expect(screen.getByRole("link", { name: /see my work/i })).toHaveAttribute(
    "href",
    "/projects"
  );
});

test("Let's talk opens and closes the hire me dialog", async () => {
  const user = userEvent.setup();
  render(<AppBanner />);

  await user.click(screen.getByRole("button", { name: /let.s talk/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Close" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
