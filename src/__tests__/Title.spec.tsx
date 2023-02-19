import { render, screen } from "@testing-library/react";
import { Title } from "../components/Title/Title";

describe("<Title />", () => {
  it("should render Title component", () => {
    render(<Title title="title" />);

    const component = screen.getByRole("heading", { name: /title/i, level: 3 });

    expect(component).toBeInTheDocument();
  });
});
