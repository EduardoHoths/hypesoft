// Components
import Head from "next/head";
import BannerHireMe from "../components/BannerHireMe/BannerHireMe";
import ButtonToTop from "../components/ButtonToTop/ButtonToTop";
import ContactMe from "../components/ContactMe/ContactMe";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";
import LastWorks from "../components/LastWorks/LastWorks";
import { MyService } from "../components/MyService/MyService";
import { MyWorks } from "../components/MyWorks/MyWorks";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypesoft - Desafio</title>
        <meta name="description" content="Teste prático para desevolvedor júnior na Hypesoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ButtonToTop />

      <Header />
      <Info />
      <MyService />
      <MyWorks />
      <LastWorks />
      <BannerHireMe />
      <Testimonial />
      <ContactMe />

      
      <Footer />
    </>
  );
}
