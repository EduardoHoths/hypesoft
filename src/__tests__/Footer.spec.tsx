import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer/Footer";

describe("<Footer />", () => {
  it("should render Footer component", () => {
    render(<Footer />);

    const component = screen.getByTestId("footer");

    expect(component).toBeInTheDocument();
  });
});
