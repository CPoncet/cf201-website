import React from "react";
import SVG from "react-inlinesvg";

import Layout from "../components/layout";
import Hero from "../components/parts/hero";
import CollectifBox from "../components/parts/collectifBox";

const Collectif = () => {
  const page = "collectif";

  return (
    <Layout>
      <Hero image={page} reverseOrder>
        <h1>Le Collectif</h1>

        <p className="mb-8">
          Le Collectif 201 est une équipe de créateurs dynamiques et compétents
          pour construire avec vous tous vos projets de communication numérique.
        </p>
      </Hero>
      <section className="container mx-auto">
        <div className="flex mb-8">
          <div className="w-3/4">
            <div>
              <h3>Notre expertise</h3>
              <p>
                En fonction de votre demande, la personne dédiée à la mise en
                œuvre de votre projet compose une équipe de professionnels et
                communique avec eux tout au long de la vie du projet. Vous
                n'avez pas à vous occuper des détails techniques de chacun des
                métiers concernés.
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
            Plus qu’un simple contact, nous vous proposons d’établir une
            véritable relation de confiance avec un accompagnement dédié à
            chaque étape de votre projet. Nous réduisons au maximum le nombre
            d'interlocuteurs afin de rendre le projet fluide, du cahier des
            charges à la livraison finale. Dans la plupart des situations, vous
            serez en contact avec un chargé de projet qui prendra en compte vos
            demandes et les transmettra à l'équipe projet.
          </p>
        </CollectifBox>

        <CollectifBox image="rse">
          <h4>Engagés RSE</h4>

          <p>
            Parce qu'aujourd'hui, plus que jamais, il faut protéger notre
            planète et les êtres vivants, nous nous engageons à toujours choisir
            l'option la plus respectueuse de l'environnement et de l'humain.
            Notamment grâce à nos prestataires hébergeurs web et imprimeurs,
            certifiés écologiques dans leurs domaines respectifs.
          </p>
        </CollectifBox>

        <CollectifBox image="humain">
          <h4>Humains</h4>

          <p>
            Profondément humains, les membres du collectif donneront toujours le
            meilleur d'eux-mêmes pour vous satisfaire mais aussi satisfaire leur
            propre fierté ! Parce qu'un projet mené avec passion fera toujours
            la différence, nous vous écoutons tout au long du projet pour
            répondre au mieux à vos attentes et vos problématiques. L'objectif :
            traduire vos besoins et vos idées en réalisations concrètes et
            intuitives !
          </p>
        </CollectifBox>
        <CollectifBox image="qualite">
          <h4>Orientés qualité</h4>

          <p>
            En veillant à la conformité ergonomique et technique, nous vous
            proposons une solution unique qui vous ressemble, mais aussi une
            solution adaptée à votre utilisation et à celle de vos publics.
          </p>
        </CollectifBox>
      </section>
    </Layout>
  );
};

export default Collectif;
