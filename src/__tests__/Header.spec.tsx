import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header/Header";

describe("<Header />", () => {

  render(<Header />);
  it("should render Header component", () => {
    

    const component = screen.getByRole("banner");
    expect(component).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<Header />);

    const about = screen.getByRole("link", { name: /about/i });
    const service = screen.getByRole("link", { name: /service/i });
    const works = screen.getByRole("link", { name: /works/i });
    const contact = screen.getByRole("link", { name: /contact/i });

    expect(about).toBeInTheDocument();
    expect(service).toBeInTheDocument();
    expect(works).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
  it("should render social links", () => {
    render(<Header />);

    const hireme = screen.getByRole("link", { name: /hire me/i });
    const linkedin = screen.getByTestId("linkedin");
    const facebook = screen.getByTestId("facebook");
    const instagram = screen.getByTestId("instagram");
    const github = screen.getByTestId("github");

    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/eduardohoths/");
    expect(facebook).toHaveAttribute("href", "https://www.facebook.com/eduardohoths/");
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/eduardo.hoths/");
    expect(github).toHaveAttribute("href", "https://github.com/eduardohoths");
    expect(hireme).toHaveAttribute('href', "https://www.linkedin.com/in/eduardohoths/")
  });
});
