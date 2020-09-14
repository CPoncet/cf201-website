import React from "react";
import SVG from "react-inlinesvg";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";
import CollectifBox from "../components/parts/collectifBox";

export default () => {
  const page = "collectif";

  return (
    <Layout page={page}>
      <Hero image={page} reverseOrder>
        <h1>Le Collectif</h1>

        <p className="mb-8">
          Le Collectif 201 est une équipe de créateurs dynamiques et compétents
          pour construire avec vous tous vos projets de communication numérique.
        </p>

        <button className="mb-4" href="/">
          Découvrir le Collectif
        </button>
      </Hero>
      <section className="container mx-auto">
        <div className="flex mb-8">
          <div className="w-3/4">
            <div>
              <h3>Notre expertise</h3>
              <p>
                Le Collectif 201 est une équipe de créateurs dynamiques et
                compétents pour construire avec vous tous vos projets de
                communication numérique.
              </p>
            </div>
          </div>
          <div className="w-1/4 flex justify-center">
            <SVG src="/le-collectif/abstract3.svg" />
          </div>
        </div>
        <div className="flex">
          <div className="w-3/4">
            <div>
              <h3>Notre expertise</h3>
              <p>
                Le Collectif 201 est une équipe de créateurs dynamiques et
                compétents pour construire avec vous tous vos projets de
                communication numérique.
              </p>
            </div>
          </div>
          <div className="w-1/4 flex justify-center">
            <SVG src="/le-collectif/abstract4.svg" />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="w-full md:w-2/3 mx-auto text-center mb-8">
          <h3 className="mb-4">Nos engagements & nos valeurs</h3>

          <p>Mettre l'humain au centre de nos préoccupations</p>
        </div>

        <CollectifBox image="accompagnement">
          <h4>Accompagnement</h4>

          <p>
            Plus qu’un simple contact, nous vous propons d’établir une véritable
            relation de confiance avec un accompagnement dédié à chaque étape de
            vos projets. Suivi avec des interlocuteurs référents clairement
            identifiés et dédiés Formation Assistance au quotidien
          </p>
        </CollectifBox>
      </section>
    </Layout>
  );
};
