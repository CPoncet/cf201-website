import React from "react";
import Layout from "../components/layout";
import Hero from "../components/parts/hero";

import { getSortOrder } from "../utils/functions";

export default ({ references }) => {
  const page = "realisations";

  return (
    <Layout>
      <Hero image={page}>
        <h1>Nos réalisations</h1>
        <p>
          Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
          commune si palatinarum iniusta adlocutus conperto id ille ut adimenda.
        </p>
      </Hero>

      <section className="container mx-auto">
        <div className="flex">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-secondary rounded-lg overflow-hidden shadow">
              <div>
                <figure className="pt-36">
                  <img src="https://picsum.photos/1280/720" alt="" />
                </figure>
              </div>
              <div className="p-4">
                <h4>Réalisation</h4>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="mb-8">Nos références</h2>

        <div className="flex flex-wrap">
          {references.map((ref) => (
            <div
              key={ref.id}
              className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0 flex justify-center"
            >
              <a target="_blank" href={ref.url}>
                <img
                  className="p-2"
                  src={ref.logo.data["full_url"]}
                  alt={ref.nom}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const refs = await fetch(
    `${process.env.API_URL}items/references?fields=*,logo.data.url`
  );

  const references = await refs.json();

  const sort = references.data.sort(getSortOrder("popularite"));

  return {
    props: {
      references: sort.slice(0, 4),
    },
  };
}
