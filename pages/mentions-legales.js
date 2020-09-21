import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";

export default () => {
  return (
    <Layout page={`mentions-legales`}>
      <Hero noImage>
        <h1>Mentions Légales</h1>
      </Hero>

      <section className="container mx-auto">
        <p>Texte</p>
      </section>
    </Layout>
  );
};
