import React from "react";
import { useQuery } from "@apollo/client";
import { HOMEPAGE } from "../lib/queries/homepage";
import { OPTIONS } from "../lib/queries/options";
import { CLIENTS } from "../lib/queries/clients";
import { isMobile } from "react-device-detect";
import Layout from "../components/layout";
import Loader from "../components/loader";
import PageBuilder from "../components/pageBuilder";
import { getSortOrder } from "../utils/functions";
import parse from "html-react-parser";

const Page = () => {
  const {
    data: homepageData,
    loading: homepageLoading,
    error: homepageError,
  } = useQuery(HOMEPAGE);

  const {
    data: optionsData,
    loading: optionsLoading,
    error: optionsError,
  } = useQuery(OPTIONS);

  const {
    data: clientsData,
    loading: clientsLoading,
    error: clientsError,
  } = useQuery(CLIENTS);

  if (homepageError || optionsError || clientsError) {
    return <div>Error loading data</div>;
  }

  if (homepageLoading || optionsLoading || clientsLoading) {
    return <Loader />;
  }

  let page = homepageData.page.homepage;

  let options = optionsData.options.siteOptions;

  let refs = clientsData.clients.edges;
  let references = clientsData.clients.edges;

  /*if (page.references.display_type === "Popularité") {
    refs = references.sort(getSortOrder("acf", "customer_popularity"));
  }

  if (page.acf.references.display_type === "Sélection") {
    refs = page.acf.references.references_selection;
  }*/

  if (isMobile) {
    refs = refs.slice(0, 6);
  }

  return (
    <Layout page={page.slug} options={options}>
      <PageBuilder page={homepageData.page.builder} />
      <section className="references container mx-auto">
        <div>
          <h2 className="text-left">{page.references.sectionTitle}</h2>

          <div className="mb-16">{parse(page.references.sectionIntro)}</div>
        </div>
        <div
          className="logo-wall relative flex items-center justify-center"
          style={{
            background: "url('/home/references.svg') no-repeat center/contain",
          }}
        >
          <div className="logos flex flex-wrap w-full sm:w-4/6 mx-auto pl-0">
            {refs.map((ref) => {
              ref = ref.node.clients;
              return (
                <div key={ref.id} className="w-1/2 sm:w-1/3">
                  <a target="_blank" href={ref.customerWebsite}>
                    <img
                      className="p-2"
                      src={ref.customerLogo.sourceUrl}
                      alt={ref.title}
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

export default Page;
