import React from "react";
import Link from "next/link";

import Layout from "../components/layout";
import Hero from "../components/parts/hero";
import CollectifBox from "../components/parts/collectifBox";
export default ({ services }) => {
  const page = "services";
  return (
    <Layout>
      <Hero image={page}>
        <h1>Nos Services</h1>
        <p>
          Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
          commune si palatinarum iniusta adlocutus conperto id ille ut adimenda.
        </p>
      </Hero>
      <section className="container mx-auto">
        {services.map((service) => (
          <div
            className={`collectif-box mb-4 rounded-lg flex justify-end p-8 sm:pt-24 sm:pb-24`}
            style={{
              background: `url('') no-repeat center/cover, #f8c8b3`,
            }}
          >
            <div className="w-full sm:w-1/4 flex items-center justify-center">
              <img
                className="h-full"
                src={service.icone.data["full_url"]}
                alt={service.titre}
              />
            </div>
            <div className="w-full sm:w-3/4">
              <h3 className="mb-4">
                <div className="text">{service.titre}</div>
                <div className="bg"></div>
              </h3>

              <p className="mb-4">{service.intro}</p>

              <Link href={`/service/${service.permalien}`}>
                <button>En savoir plus</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const servicesItems = await fetch(
    `${process.env.API_URL}items/services?fields=*,icone.data.url`
  );

  const services = await servicesItems.json();

  return {
    props: {
      services: services.data,
    },
  };
}
