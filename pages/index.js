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
    window.addEventListener("resize", () => {
      setHeight(ref.current.clientWidth);
    });
  }, [height]);

  return (
    <Layout page="homepage">
      <section className="hero container mx-auto flex text-right">
        <div className="text w-1/2 flex items-center pr-4">
          <div>
            <h1>Nous sommes à jour</h1>

            <p className="mb-8">
              Vous souhaitez l'être aussi ? Faites confiance à notre Collectif
              pour tous vos projets de communication numérique.
            </p>

            <button href="/">Qui sommes-nous ?</button>
            <button href="/">Un projet ? Parlons-en !</button>
          </div>
        </div>
        <div className="w-1/2">
          <HeroHome />
        </div>
      </section>
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
        <div className="engagements flex mt-8">
          <div className="text w-1/2 flex items-center justify-center">
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
          <div className="w-1/2">
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
        <div className="flex flex-wrap p-16">
          <div className="w-1/3 p-8">
            <div
              ref={ref}
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Sites web</h4>
            </div>
          </div>
          <div className="w-1/3 p-8">
            <div
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Logo / Identité visuelle</h4>
            </div>
          </div>
          <div className="w-1/3 p-8">
            <div
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Supports imprimés</h4>
            </div>
          </div>
          <div className="w-1/3 p-8">
            <div
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Réseaux sociaux</h4>
            </div>
          </div>
          <div className="w-1/3 p-8">
            <div
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Stratégie marketing</h4>
            </div>
          </div>
          <div className="w-1/3 p-8">
            <div
              className="icon-box bg-white shadow rounded p-2 m-4 flex flex-col items-center justify-center"
              style={{ height: height }}
            >
              <Desktop />
              <h4>Conseils</h4>
            </div>
          </div>
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
            height: "75vh",
          }}
        >
          {/*<div className="bg absolute inset-0 z--1">
            <HeroHome3 />
  </div>*/}

          <div className="logos flex flex-wrap w-4/6 mx-auto pr-40 pl-0">
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
            <div className="w-1/3">
              <img className="p-2" src="https://picsum.photos/300/150" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
