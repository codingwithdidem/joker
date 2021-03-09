import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
  test("expect textbox in the App component", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  test("expect placeholder text Search..", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search..")).toBeInTheDocument();
  });
  test("should header text to be Joker", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Joker");
  });
  test("should image alt text to be Laughing Face", () => {
    render(<App />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "owl.svg");
    expect(logo).toHaveAttribute("alt", "Laughing Face");
  });
});
