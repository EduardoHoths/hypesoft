// Components
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";
import { MyService } from "../components/MyService/MyService";
import { MyWorks } from "../components/MyWorks/MyWorks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypesoft - Desafio</title>
        <meta name="description" content="Teste prático para desevolvedor júnior na Hypesoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Info />
      <MyService />
      <MyWorks />

      <Footer />
    </>
  );
}
