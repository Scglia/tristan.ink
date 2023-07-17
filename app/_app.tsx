import Layout from "./layout";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
