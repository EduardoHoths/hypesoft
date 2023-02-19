import { render, screen } from "@testing-library/react";
import { ButtonToTop } from "../components/ButtonToTop/ButtonToTop";

describe("<ButtonToTop />", () => {
  it("should render ButtonToTop component", () => {
    render(<ButtonToTop />);

    const button = screen.getByTestId("button-to-top");

    expect(button).toBeInTheDocument();
  });
});
