import { render, screen } from "@testing-library/react";
import { MyService } from "../components/MyService/MyService";
import { CardService } from "../components/MyService/CardService";

describe("<MyService />", () => {
  it("should render MyService component", () => {
    render(<MyService />);

    const component = screen.getByTestId("my-service");

    expect(component).toBeInTheDocument();
  });

  it("should render a card component", () => {
    const service = {
      id: 1,
      title: "title",
      icon: <span></span>,
    };

    render(<CardService service={service} />);

    const title = screen.getByRole("heading", { name: service.title, level: 4 });

    expect(title).toBeInTheDocument();
  });
});
