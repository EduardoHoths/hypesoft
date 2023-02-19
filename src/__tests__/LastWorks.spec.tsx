import { render, screen } from "@testing-library/react";
import { LastWorks } from "../components/LastWorks/LastWorks";

describe("<LastWorks />", () => {
  it("should render LastWorks component", () => {
    render(<LastWorks />);

    const component = screen.getByTestId("last-works");

    expect(component).toBeInTheDocument();
  });
});