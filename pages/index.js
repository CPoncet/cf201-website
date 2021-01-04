import React from "react";
import { isMobile } from "react-device-detect";
import Layout from "../components/layout";
import PageBuilder from "../components/pageBuilder";
import { getSortOrder } from "../utils/functions";
import parse from "html-react-parser";

const Page = ({ page, options, references }) => {
  let refs = references;

  if (page.acf.references.display_type === "Popularité") {
    refs = references.sort(getSortOrder("acf", "customer_popularity"));
  }

  if (page.acf.references.display_type === "Sélection") {
    refs = page.acf.references.references_selection;
  }

  if (isMobile) {
    refs = refs.slice(0, 6);
  }

  return (
    <Layout page={page.slug} options={options}>
      <PageBuilder page={page} />
      <section className="references container mx-auto">
        <div>
          <h2 className="text-left">{page.acf.references.section_title}</h2>

          <div className="mb-16">
            {parse(page.acf.references.section_intro)}
          </div>
        </div>
        <div
          className="logo-wall relative flex items-center justify-center"
          style={{
            background: "url('/home/references.svg') no-repeat center/contain",
          }}
        >
          <div className="logos flex flex-wrap w-full sm:w-4/6 mx-auto pl-0">
            {refs.map((ref) => (
              <div key={ref.id} className="w-1/2 sm:w-1/3">
                <a target="_blank" href={ref.acf.customer_website}>
                  <img
                    className="p-2"
                    src={ref.acf.customer_logo}
                    alt={ref.title.rendered}
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
  const fetchedPage = await fetch(`${process.env.API_URL}/pages?slug=accueil`);

  const page = await fetchedPage.json();

  const fetchedOptions = await fetch(process.env.API_OPTIONS);

  const options = await fetchedOptions.json();

  const fetchedRefs = await fetch(`${process.env.API_URL}/clients`);

  const references = await fetchedRefs.json();

  return {
    props: {
      page: page[0],
      options: options.acf,
      references,
    },
  };
}

export default Page;
