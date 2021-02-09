import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { getOptions } from "../lib/api";

const Custom404 = ({ options }) => {
  return (
    <Layout page="404" options={options}>
      <section className="container mx-auto pt-8">
        <h1>Oups...</h1>
        <p>Nous n'avons pas pu trouver cette page...</p>
        <Link href="/">
          <button className="mb-4">Retour à l'accueil...</button>
        </Link>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const options = await getOptions();

  return {
    props: {
      options: options.siteOptions,
    },
  };
}

export default Custom404;
