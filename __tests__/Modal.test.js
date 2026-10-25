import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HireMeModal from "../components/HireMeModal";
import { sendMessage } from "../lib/sendMessage";

jest.mock("../lib/sendMessage", () => ({
  ...jest.requireActual("../lib/sendMessage"),
  sendMessage: jest.fn(),
}));

function setup() {
  const onClose = jest.fn();
  const onRequest = jest.fn();
  const user = userEvent.setup();
  render(<HireMeModal onClose={onClose} onRequest={onRequest} />);
  return { user, onClose, onRequest };
}

async function fillForm(user) {
  await user.type(screen.getByLabelText("Name"), "Jane Recruiter");
  await user.type(screen.getByLabelText("Email"), "jane@example.com");
  await user.type(screen.getByLabelText("Details"), "We are hiring.");
}

beforeEach(() => {
  sendMessage.mockReset();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("modal shows the title and a close button", async () => {
  const { user, onClose } = setup();

  expect(screen.getByText(/What are you looking for\?/i)).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Close" }));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("an incomplete form is not sent", async () => {
  const { user, onRequest } = setup();

  await user.click(screen.getByRole("button", { name: "Send" }));

  expect(screen.getByRole("alert")).toHaveTextContent(/fill in your name/i);
  expect(sendMessage).not.toHaveBeenCalled();
  expect(onRequest).not.toHaveBeenCalled();
});

test("the modal closes after the message was sent", async () => {
  sendMessage.mockResolvedValue({ status: 200 });
  const { user, onRequest } = setup();

  await fillForm(user);
  await user.click(screen.getByRole("button", { name: "Send" }));

  expect(sendMessage).toHaveBeenCalledWith(
    expect.objectContaining({ name: "Jane Recruiter", email: "jane@example.com" })
  );
  expect(onRequest).toHaveBeenCalledTimes(1);
});

test("a failed send keeps the modal open and shows an error", async () => {
  sendMessage.mockRejectedValue(new Error("network"));
  const { user, onRequest } = setup();

  await fillForm(user);
  await user.click(screen.getByRole("button", { name: "Send" }));

  expect(await screen.findByRole("alert")).toHaveTextContent(/something went wrong/i);
  expect(onRequest).not.toHaveBeenCalled();
});
