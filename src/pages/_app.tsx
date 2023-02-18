import { AppProps } from "next/app";
import "../styles/GlobalStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
