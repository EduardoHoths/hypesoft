import { render, screen } from "@testing-library/react";
import { BannerHireMe } from "../components/BannerHireMe/BannerHireMe";

describe("<BannerHireMe />", () => {
  it("should render BannerHireMe component", () => {
    render(<BannerHireMe />);

    const link = screen.getByRole("link", { name: /hire me/i });

    expect(link).toHaveAttribute('href', "https://www.linkedin.com/in/eduardohoths/");
  });
});
