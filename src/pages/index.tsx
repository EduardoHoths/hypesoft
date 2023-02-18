// Components
import Head from "next/head";
import dynamic  from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"), { ssr: false });

// Next

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypesoft - Desafio</title>
        <meta name="description" content="Teste prático para desevolvedor júnior na Hypesoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
    </>
  );
}
