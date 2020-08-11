import React from "react";
import Layout from "../components/layout";

import HeroHome from "../components/svg/HeroHome";

export default () => (
  <Layout page="homepage">
    <div className="row hero">
      <div className="column is-half text">
        <div>
          <h1>Nous sommes à jour</h1>

          <p>
            Vous souhaitez l'être aussi ? Faites confiance à notre Collectif
            pour tous vos projets de communication numérique.
          </p>

          <button href="/">Qui sommes-nous ?</button>
          <button href="/">Un projet ? Parlons-en !</button>
        </div>
      </div>
      <div className="column is-half">
        <HeroHome />
      </div>
    </div>
    <div className="row collectif">
      <div className="row no-gutter ">
        <h2>Le Collectif</h2>
      </div>
      <div className="row no-gutter">
        <div className="column is-one-quarter image">
          <img className="smaller" src="/home/collectif_element-1.svg" />
        </div>
        <div className="column is-three-quarters text">
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
      <div className="row no-gutter">
        <div className="column is-one-quarter">
          <img src="/home/collectif_element-2.svg" />
        </div>
        <div className="column is-three-quarters text">
          <div>
            <h3>Notre philosophie</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id justo a leo aliquet viverra. Sed molestie arcu at
              lorem tempus, sed egestas felis varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
