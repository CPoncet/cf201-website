import React from "react";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";

function Blog(props) {
  const page = "blog";

  return (
    <Layout page={page}>
      <Hero noImage>
        <h1>Blog</h1>
        <p>
          Le Collectif 201 est une équipe de créateurs dynamiques et compétents
          pour construire avec vous tous vos projets de communication numérique.
        </p>
      </Hero>
      <section className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <img
              className="rounded-lg"
              src="https://picsum.photos/600/300"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-left mb-8">Lorem ipsum dolor sit amet</h2>
            <p className="mb-8">
              Le Collectif 201 est une équipe de créateurs dynamiques et
              compétents pour construire avec vous tous vos projets de
              communication numérique.Le Collectif 201 est une équipe de
              créateurs dynamiques et compétents pour construire avec vous tous
              vos projets de communication numérique.
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 flex">
            <div className="w-1/2 flex items-center">
              <img
                className="rounded-lg"
                src="https://picsum.photos/250/250"
                alt=""
              />
            </div>

            <div className="w-1/2 flex items-center">
              <div>
                <h4 className="mb-4">Lorem ipsum dolor sit amet</h4>

                <p className="mb-4">
                  Le Collectif 201 est une équipe de créateurs dynamiques et
                  compétents pour construire avec vous tous vos projets de
                  communication numérique.
                </p>

                <button>En savoir plus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
