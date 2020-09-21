import React from "react";
import Link from "next/link";
import SVG from "react-inlinesvg";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";

import { getSortOrder } from "../utils/functions";

export default ({ references, services }) => {
  const page = "homepage";

  const servicesIcons = [
    { image: "desktop", text: "Sites web" },
    { image: "logo", text: "Identité visuelle" },
    { image: "print", text: "Supports imprimés" },
    { image: "social", text: "Réseaux sociaux" },
    { image: "marketing", text: "Stratégie marketing" },
    { image: "audit", text: "Conseils" },
  ];

  return (
    <Layout page={page}>
      <Hero image={page}>
        <h1>Nous sommes à jour</h1>

        <p className="mb-8">
          Vous souhaitez l'être aussi ? Faites confiance à notre Collectif pour
          tous vos projets de communication numérique.
        </p>
        <Link href="/le-collectif">
          <button className="mb-4">Qui sommes-nous ?</button>
        </Link>
        <button>Un projet ? Parlons-en !</button>
      </Hero>
      <section className="collectif container mx-auto">
        <div className="text flex items-center">
          <h2>Le Collectif</h2>
        </div>
        <div className="flex">
          <div className="w-1/4 image flex justify-end">
            <img className="w-3/4" src="/home/collectif_element-1.svg" />
          </div>
          <div className="w-3/4 flex items-center ml-8">
            <div>
              <h3>Notre expertise</h3>
              <p>
                Le Collectif 201 est une équipe de créateurs dynamiques et
                compétents pour construire avec vous tous vos projets de
                communication numérique.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4">
            <img src="/home/collectif_element-2.svg" />
          </div>
          <div className="text w-3/4 flex items-center justify-center ml-8">
            <div>
              <h3>Notre philosophie</h3>
              <p>
                Ce que nous souhaitons mettre en avant, c’est votre projet ! Les
                différents talents que nous rassemblons au sein du Collectif
                sont là pour lui donner vie. En vous accompagnant dans les
                premières esquisses jusque dans la prise en main des outils mis
                en place, notre équipe de passionnés est à vos côtés à chaque
                instant.
              </p>
            </div>
          </div>
        </div>
        <div className="engagements flex mt-8 flex-wrap">
          <div className="text w-full md:w-1/2 flex items-center justify-center">
            <div>
              <h3>Nos engagements et nos valeurs</h3>
              <p>Mettre l'humain au centre de nos préoccupations.</p>
              <ul className="list">
                <li>Accompagnement</li>
                <li>Politique RSE</li>
                <li>Humain</li>
                <li>Qualité</li>
              </ul>
              <Link href="/le-collectif">
                <button className="block mx-auto">En savoir plus</button>
              </Link>
            </div>
          </div>
          <div className="w-full order-first sm:order-last md:w-1/2">
            <SVG src="/home/collectif.svg" />
          </div>
        </div>
      </section>
      <section className="services container mx-auto">
        <div>
          <h2>Nos Services</h2>

          <p className="text-center">
            Notre équipe de professionnels est prête à relever tous vos défis !
          </p>
        </div>
        <div className="flex flex-wrap p-0 md:p-16">
          {services
            ? services.map((service) => (
                <div className="w-full md:w-1/3 md:p-4 mb-4 md:mb-0">
                  <Link href={`/service/${service.permalien}`}>
                    <a>
                      <div className="icon-box w-2/3 mx-auto md:w-full md:mx-0 bg-white shadow rounded p-4 flex flex-col items-center justify-center">
                        <img
                          src={service.icone.data["full_url"]}
                          alt={service.titre}
                        />
                        <h4>{service.titre}</h4>
                      </div>
                    </a>
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className="text">
          <Link href="/nos-services">
            <button className="block mx-auto" href="#">
              En savoir plus
            </button>
          </Link>
        </div>
      </section>
      <section className="references container mx-auto">
        <div>
          <h2 className="text-left">Nos Références</h2>

          <p>Ils nous ont fait confiance. Pourquoi pas vous ?</p>
        </div>
        <div
          className="logo-wall relative flex items-center justify-center"
          style={{
            background: "url('/home/references.svg') no-repeat center/contain",
          }}
        >
          <div className="logos flex flex-wrap w-full sm:w-4/6 mx-auto pl-0">
            {references.map((ref) => (
              <div key={ref.id} className="w-1/2 sm:w-1/3">
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

  const servicesItems = await fetch(
    `${process.env.API_URL}items/services?fields=*,icone.data.url`
  );

  const services = await servicesItems.json();

  return {
    props: {
      references: references.data.sort(getSortOrder("popularite")),
      services: services.data,
    },
  };
}
