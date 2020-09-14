import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";
import CollectifBox from "../components/parts/collectifBox";
export default () => {
  const page = "nos-services";
  return (
    <Layout page={page}>
      <Hero image="nos-services">
        <h1>Nos Services</h1>
        <p>
          Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
          commune si palatinarum iniusta adlocutus conperto id ille ut adimenda.
        </p>
      </Hero>
      <section className="container mx-auto">
        <CollectifBox image="websites" service>
          <h3 className="mb-4">
            <div className="text">Sites internet</div>
            <div className="bg"></div>
          </h3>

          <p className="mb-4">
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>

          <Link href="/service/sites-internet">
            <button>En savoir plus</button>
          </Link>
        </CollectifBox>
      </section>
    </Layout>
  );
};
