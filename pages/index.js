import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";

import HeroHome from "../components/svg/HeroHome";
import HeroHome2 from "../components/svg/HeroHome2";
import HeroHome3 from "../components/svg/HeroHome3";
import Desktop from "../components/svg/icons/Desktop";

export default () => {
  const [height, setHeight] = useState("100%");

  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current.clientWidth);
  }, [height]);

  return (
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
          <div className="column is-one-quarter image stack">
            <img className="smaller" src="/home/collectif_element-1.svg" />
          </div>
          <div className="column is-three-quarters text stack">
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
          <div className="column is-one-quarter stack">
            <img src="/home/collectif_element-2.svg" />
          </div>
          <div className="column is-three-quarters text stack">
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
        <div className="row engagements">
          <div className="column is-half text">
            <div>
              <h3>Nos engagements et nos valeurs</h3>
              <p>Mettre l'humain au centre de nos préoccupations.</p>
              <ul className="list">
                <li>Accompagnement</li>
                <li>Politique RSE</li>
                <li>Humain</li>
                <li>Qualité</li>
              </ul>
              <button href="#">En savoir plus</button>
            </div>
          </div>
          <div className="column is-half">
            <HeroHome2 />
          </div>
        </div>
      </div>
      <div className="row services">
        <div className="row no-gutter">
          <h2>Nos Services</h2>

          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>
        </div>
        <div className="row no-gutter">
          <div className="column is-one-third">
            <div ref={ref} className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Sites web</h4>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Logo / Identité visuelle</h4>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Supports imprimés</h4>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Réseaux sociaux</h4>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Stratégie marketing</h4>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="icon-box" style={{ height: height }}>
              <Desktop />
              <h4>Conseils</h4>
            </div>
          </div>
        </div>
        <div className="row text">
          <button href="#">En savoir plus</button>
        </div>
      </div>
      <div className="row references">
        <div className="row no-gutter">
          <h2>Nos Références</h2>

          <p>
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>
        </div>
        <div className="row logo-wall">
          <div className="bg">
            <HeroHome3 />
          </div>

          <div className="logos">
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
            <div className="column is-one-third stack">
              <img src="https://picsum.photos/300/150" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
