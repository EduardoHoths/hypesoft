// Components
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";

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
    </>
  );
}
