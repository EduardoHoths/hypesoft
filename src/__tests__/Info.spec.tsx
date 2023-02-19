import { render, screen } from "@testing-library/react";
import { Info } from "../components/Info/Info";

describe("<Info />", () => {
  it("should render Info component", () => {
    render(<Info />);
    const component = screen.getByTestId("about");

    expect(component).toBeInTheDocument();
  });

  it("should render a link with a href to linkedin", () => {
    render(<Info />);
    const link = screen.getByRole("link", { name: /say hi/i });

    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/eduardohoths/");
  });
});
