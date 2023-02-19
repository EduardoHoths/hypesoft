// Styles
import { MyServiceStyled } from "./Styles";

// React Icons
import { BsCode, BsPhone } from "react-icons/bs";

// Components
import { Title } from "../Title/Title";

// React Scroll
import { Element } from "react-scroll";
import { CardService } from "./CardService";

const myServices = [
  {
    id: 1,
    title: "Front end Development",
    icon: <BsCode size={40} color="#000" />,
  },
  {
    id: 2,
    title: "Responsive Websites",
    icon: <BsPhone size={40} color="#000" />,
  },
];

export function MyService() {
  return (
    <Element name="service" data-testid="my-service">
      <MyServiceStyled>
        <Title title="My Service" />

        <div className="cards">
          {myServices.map((service) => (
            <CardService service={service} key={service.id} />
          ))}
        </div>
      </MyServiceStyled>
    </Element>
  );
}
