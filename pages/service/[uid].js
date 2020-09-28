import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Layout from "../../components/layout";

import Hero from "../../components/parts/hero";

const Service = ({ services, service }) => {
  return null;

  /*
  return (
    <Layout page={`service ${service.permalien}`}>
      <Hero noImage>
        <span className="uppercase font-black">Nos services</span>
        <img
          className="mx-auto mt-8"
          src={service.icone.data["full_url"]}
          alt={service.titre}
        />
        <h1>{service.titre}</h1>
        <p>{service.intro}</p>
      </Hero>

      <section className="container mx-auto">{parse(service.contenu)}</section>

      <section className="container mx-auto">
        <h2>Nos autres services</h2>
        <div className="flex flex-wrap -mx-4">
          {services
            ? services.map((service) => (
                <div className="w-full md:flex-1 mx-4 mb-4">
                  <Link href={`/service/${service.permalien}`}>
                    <a>
                      <div className="icon-box  w-full h-full bg-white shadow rounded p-4 flex flex-col items-center justify-center">
                        <img
                          src={service.icone.data["full_url"]}
                          alt={service.titre}
                        />
                        <h4 className="text-center">{service.titre}</h4>
                      </div>
                    </a>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </section>
    </Layout>
  );
  */
};

/*
export async function getStaticPaths() {
  const servicesItem = await fetch(`${process.env.API_URL}items/services`);
  const services = await servicesItem.json();

  const params = services.data.map((service) => ({
    params: { uid: service.permalien },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const serviceItem = await fetch(
    `${process.env.API_URL}items/services?filter[permalien]=${context.params.uid}&fields=*,icone.data.url`
  );

  const service = await serviceItem.json();

  const servicesItems = await fetch(
    `${process.env.API_URL}items/services?fields=*,icone.data.url`
  );

  const services = await servicesItems.json();

  services.data.splice(
    services.data.findIndex((x) => x.permalien === context.params.uid),
    1
  );

  return {
    props: {
      service: service.data[0],
      services: services.data,
    },
  };
}
*/
export default Service;
