import { fireEvent, render, screen } from "@testing-library/react";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { CardTestimonial } from "../components/Testimonial/CardTestimonial";

const testimonialList = [
  {
    id: 1,
    author: "Sundar Pichai",
    position: "CEO & Founder of ",
    company: "Google",
    testimonial:
      "“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”",
    stars: 5.0,
  },
  {
    id: 2,
    author: "Shantanu Narayen",
    position: "CEO of ",
    company: "Adobe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl lectus, pretium vel diam aliquam, posuere tempus est. Suspendisse euismod arcu diam, ac rutrum elit imperdiet a. Duis sit amet eleifend nisl, vel venenatis turpis. Phasellus lobortis, magna at.",
    stars: 5.0,
  },
  {
    id: 3,
    author: "Noah Levin",
    position: "Director of Design, ",
    company: "Figma",
    testimonial:
      "Praesent eu ullamcorper quam, sagittis vulputate mauris. Curabitur tristique sem nec enim vulputate, ac luctus ex elementum. Suspendisse potenti.Maecenas at euismod nibh. Fusce at tortor nec metus aliquam dictum id eget tortor. Suspendisse luctus odio eu ante dictum cursus.",
    stars: 5.0,
  },
  {
    id: 4,
    author: "Stewart Butterfield",
    position: "CEO & Founder of ",
    company: "Slack",
    testimonial:
      "Maecenas at euismod nibh. Fusce at tortor nec metus aliquam dictum id eget tortor. Suspendisse luctus odio eu ante dictum cursus.Donec vel aliquam orci. Mauris luctus semper quam, in volutpat dolor congue ac. Proin fringilla tortor sapien, non pretium elit.",
    stars: 5.0,
  },
];

describe("<Testimonial />", () => {
  it("should render Testimonial component", () => {
    render(<Testimonial />);

    const title = screen.getByRole("heading", { name: /Testimonial/i, level: 3 });

    expect(title).toBeInTheDocument();
  });

  it("should render CardTestimonial component", () => {
    render(
      <CardTestimonial
        setTestimonial={() => true}
        setTestimonialActive={() => true}
        testimonial={testimonialList[1]}
        testimonialActive={1}
      />
    );

    const card = screen.getByText(testimonialList[1].author);

    expect(card).toBeInTheDocument();
  });

  it("should change active testimonial", () => {
    render(<Testimonial />);

    const card = screen.getByText(testimonialList[2].author);
    fireEvent.click(card);

    const testimonial = screen.getByText(testimonialList[2].testimonial);

    expect(testimonial).toBeInTheDocument();
  });
});
