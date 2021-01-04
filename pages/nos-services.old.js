import React from "react";
import parse from "html-react-parser";

import Layout from "../components/layout";
import Hero from "../components/parts/hero";

const NosServices = ({ services }) => {
  const page = "services";
  return (
    <Layout>
      <Hero image={page}>
        <h1>Nos Services</h1>
        <p>
          Pour chacune de nos prestations, et selon l'ampleur de votre projet,
          une équipe de professionnels est constituée et a pour mission de
          réaliser le produit le plus approprié.
        </p>
      </Hero>
      <section className="container mx-auto">
        {services.map((service, index) => (
          <div
            key={`${service.title.rendered}-${index}`}
            className={`collectif-box mb-4 rounded-lg flex justify-end p-8 sm:pt-24 sm:pb-24`}
            style={{
              background: `url('') no-repeat center/cover, #f8c8b3`,
            }}
          >
            <div className="w-full sm:w-1/4 flex items-center justify-center">
              <img
                className="h-full"
                src={service.acf.service_icon}
                alt={service.title.rendered}
              />
            </div>
            <div className="w-full sm:w-3/4">
              <h3 className="mb-4">
                <div className="text">{service.title.rendered}</div>
                <div className="bg"></div>
              </h3>

              <p className="mb-4">{parse(service.acf.service_intro)}</p>

              {/*<Link href={`/service/${service.permalien}`}>
                <button>En savoir plus</button>
          </Link>*/}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const servicesItems = await fetch(`${process.env.API_URL}/services`);

  const services = await servicesItems.json();

  return {
    props: {
      services: services,
    },
  };
}

export default NosServices;
