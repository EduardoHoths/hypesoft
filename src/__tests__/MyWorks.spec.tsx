import { render, screen } from "@testing-library/react";
import { MyWorks } from "../components/MyWorks/MyWorks";
import { CardWork } from "./../components/MyWorks/CardWork";

describe("<MyWorks />", () => {
  it("should render MyWorks component", () => {
    render(<MyWorks />);

    const title = screen.getByRole("heading", { name: /my selected works/i, level: 3 });

    expect(title).toBeInTheDocument();
  });

  it("should render a card component", () => {
    const work = {
      id: 1,
      title: "title",
      img: "https://via.placeholder.com/150x150",
      link: "https://www.google.com",
    };

    render(<CardWork work={work} />);

    const title = screen.getByRole("heading", { name: work.title, level: 4 });
    const img = screen.getByRole("img");
    const link = screen.getByRole("link");

    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute("src", work.img);
    expect(link).toHaveAttribute("href", work.link);
  });
});
