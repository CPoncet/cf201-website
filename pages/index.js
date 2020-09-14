import React from "react";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";
import IconBox from "../components/parts/iconBox";

import HeroHome2 from "../components/svg/HeroHome2";
import HeroHome3 from "../components/svg/HeroHome3";

export default () => {
  const page = "homepage";

  const servicesIcons = [
    { image: "desktop", text: "Sites web" },
    { image: "logo", text: "Identité visuelle" },
    { image: "print", text: "Supports imprimés" },
    { image: "social", text: "Réseaux sociaux" },
    { image: "marketing", text: "Stratégie marketing" },
    { image: "audit", text: "Conseils" },
  ];

  const referencesSettings = {
    number: 9,
    img: "https://picsum.photos/300/150",
  };

  const references = [];

  for (var i = 0; i < referencesSettings.number; i++) {
    references.push(referencesSettings.img);
  }

  return (
    <Layout page={page}>
      <Hero image={page}>
        <h1>Nous sommes à jour</h1>

        <p className="mb-8">
          Vous souhaitez l'être aussi ? Faites confiance à notre Collectif pour
          tous vos projets de communication numérique.
        </p>

        <button className="mb-4" href="/">
          Qui sommes-nous ?
        </button>
        <button href="/">Un projet ? Parlons-en !</button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id justo a leo aliquet viverra. Sed molestie arcu
                at lorem tempus, sed egestas felis varius.
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
              <button className="block mx-auto" href="#">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="w-full order-first sm:order-last md:w-1/2">
            <HeroHome2 />
          </div>
        </div>
      </section>
      <section className="services container mx-auto">
        <div>
          <h2>Nos Services</h2>

          <p className="text-center">
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>
        </div>
        <div className="flex flex-wrap p-0 md:p-16">
          {servicesIcons
            ? servicesIcons.map((icon) => (
                <IconBox image={icon.image}>
                  <h4>{icon.text}</h4>
                </IconBox>
              ))
            : null}
        </div>
        <div className="text">
          <button className="block mx-auto" href="#">
            En savoir plus
          </button>
        </div>
      </section>
      <section className="references container mx-auto">
        <div>
          <h2 className="text-left">Nos Références</h2>

          <p>
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>
        </div>
        <div
          className="logo-wall relative flex items-center justify-center"
          style={{
            background:
              "url('/home/illu_references.svg') no-repeat center/contain",
          }}
        >
          <div className="logos flex flex-wrap w-full sm:w-4/6  mx-auto pl-0">
            {references.map((ref) => (
              <div className="w-1/2 sm:w-1/3">
                <img className="p-2" src={ref} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
