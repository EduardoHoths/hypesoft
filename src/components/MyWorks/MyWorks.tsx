// React Icons
import { BsArrowRight } from "react-icons/bs";

// Components
import { Title } from "../Title/Title";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Styles
import { Card, MyWorksStyled } from "./Styles";

// React Scroll
import { Element } from "react-scroll";

const myWorks = [
  {
    id: 1,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076539806743527434/image.png",
    title: "Galorys",
    link: "https://galorys.com/",
  },
  {
    id: 2,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076540197132574761/image.png",
    title: "Naped ",
    link: "https://desafio-10-naped.vercel.app/",
  },
  {
    id: 3,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076540277914873926/image.png",
    title: "Dogs",
    link: "https://galorys.com/",
  },
  {
    id: 4,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076540698318356633/image.png",
    title: "To do App",
    link: "https://01-todo-list-theta.vercel.app/",
  },
  {
    id: 5,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076541246803284038/image.png",
    title: "Spirited Away",
    link: "https://desafios-codelandia-five.vercel.app/",
  },
  {
    id: 6,
    img: "https://cdn.discordapp.com/attachments/956662188947435610/1076541509479977126/image.png",
    title: "Dt Money",
    link: "https://dt-money-theta-eight.vercel.app/",
  },
];

export function MyWorks() {
  return (
    <Element name="works">
      <MyWorksStyled>
      <Title title="My Selected Works" />

      <div className="cards">
        {myWorks.map((work) => (
          <AnimationOnScroll
            key={work.id}
            animateIn="hover-on-mobile"
            initiallyVisible={true}
            delay={500}
          >
            <Card>
              <img src={work.img} alt={work.title} />

              <div>
                <h4>{work.title}</h4>

                <a href={work.link} target="_blank" className="view-project">
                  <span>VIEW PROJECT</span>
                  <BsArrowRight size={24} color="#000" />
                </a>
              </div>
            </Card>
          </AnimationOnScroll>
        ))}
      </div>
    </MyWorksStyled>
    </Element>
  );
}
