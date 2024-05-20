import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/ozos.ico" />
        <meta
          name="description"
          content="Welcome to ozos, your premier e-commerce platform for all your shopping needs!"
        />
        <meta
          name="keywords"
          content="ozos, e-commerce, shopping, online store"
        />
        <meta name="author" content="ozos" />
        <title>ozos - E-Ticaret Platform</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
