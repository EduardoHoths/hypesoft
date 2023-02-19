import { render, screen } from "@testing-library/react";
import { ContactMe } from "./../components/ContactMe/ContactMe";

describe("<ContactMe/>", () => {
  it("should render ContactMe component", () => {
    render(<ContactMe />);

    const component = screen.getByTestId("contact-me");

    expect(component).toBeInTheDocument();
  });

  it("should render social links", () => {
    render(<ContactMe />);

    const linkedin = screen.getByTestId("linkedin");
    const facebook = screen.getByTestId("facebook");
    const instagram = screen.getByTestId("instagram");
    const github = screen.getByTestId("github");

    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/eduardohoths/");
    expect(facebook).toHaveAttribute("href", "https://www.facebook.com/eduardohoths/");
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/eduardo.hoths/");
    expect(github).toHaveAttribute("href", "https://github.com/eduardohoths/");
  });
});
