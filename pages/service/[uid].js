import React from "react";

import { useRouter } from "next/router";

import Layout from "../../components/layout";
import Hero from "../../components/parts/hero";

export default () => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Layout page={uid}>
      <Hero noImage>
        <span className="uppercase font-black">Nos services</span>
        <h1>Sites internet</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Hero>
    </Layout>
  );
};
