import React from "react";
import Layout from "../components/layout";
import Hero from "../components/parts/hero";

export default () => {
  const page = "nos-realisations";

  return (
    <Layout page={page}>
      <Hero image={page}>
        <h1>Nos réalisations</h1>
        <p>
          Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
          commune si palatinarum iniusta adlocutus conperto id ille ut adimenda.
        </p>
      </Hero>

      <section className="container mx-auto">
        <div className="bg-primary rounded-lg p-4 flex justify-center mb-8">
          <div className="w-1/2 flex ">
            <div className="flex flex-1 justify-center">
              <button>Sites internet</button>
            </div>
            <div className="flex flex-1 justify-center">
              <button>Print</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-secondary rounded-lg overflow-hidden shadow">
              <div>
                <figure className="pt-36">
                  <img src="https://picsum.photos/1280/720" alt="" />
                </figure>
              </div>
              <div className="p-4">
                <h4>Réalisation</h4>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="mb-8">Nos références</h2>

        <div className="flex">
          <div className="w-1/4 flex justify-center">
            <img src="https://picsum.photos/150/150" alt="" />
          </div>
          <div className="w-1/4 flex justify-center">
            <img src="https://picsum.photos/150/150" alt="" />
          </div>
          <div className="w-1/4 flex justify-center">
            <img src="https://picsum.photos/150/150" alt="" />
          </div>
          <div className="w-1/4 flex justify-center">
            <img src="https://picsum.photos/150/150" alt="" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
