import React from "react";
import { isMobile } from "react-device-detect";
import Layout from "../components/layout";
import PageBuilder from "../components/pageBuilder";
import parse from "html-react-parser";
import { getClients, getHomepage, getOptions } from "../lib/api";

const Page = ({ homepage, builder, options, clients, seo }) => {
  if (isMobile) {
    refs = refs.slice(0, 6);
  }

  return (
    <Layout page={homepage.slug} options={options} seo={seo}>
      <PageBuilder page={builder} />
      <section className="references container mx-auto">
        <div>
          <h2 className="text-left">{homepage.references.sectionTitle}</h2>

          <div className="mb-16">{parse(homepage.references.sectionIntro)}</div>
        </div>
        <div
          className="logo-wall relative flex items-center justify-center"
          style={{
            background: "url('/home/references.svg') no-repeat center/contain",
          }}
        >
          <div className="logos flex flex-wrap w-full sm:w-4/6 mx-auto pl-0">
            {clients &&
              clients.edges.map(({ node }) => {
                return (
                  <div key={node.id} className="w-1/2 sm:w-1/3">
                    <a target="_blank" href={node.clients.customerWebsite}>
                      <img
                        className="p-2"
                        src={node.clients.customerLogo.sourceUrl}
                        alt={node.title}
                      />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const page = await getHomepage("", "accueil");
  const options = await getOptions();
  const clients = await getClients();

  return {
    props: {
      homepage: page.homepage,
      builder: page.builder,
      seo: page.seo,
      options: options.siteOptions,
      clients,
    },
  };
}

export default Page;
