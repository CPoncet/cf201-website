import React from "react";
import { useQuery } from "@apollo/client";
import { PAGES } from "../lib/queries/pages";
import { PAGE } from "../lib/queries/page";
import { OPTIONS } from "../lib/queries/options";
import Layout from "../components/layout";
import Loader from "../components/loader";
import PageBuilder from "../components/pageBuilder";
import { useRouter } from "next/router";
import Custom404 from "./404";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: pageData,
    loading: pageLoading,
    error: pageError,
  } = useQuery(PAGE, { variables: { id: slug } });

  const {
    data: optionsData,
    loading: optionsLoading,
    error: optionsError,
  } = useQuery(OPTIONS);

  if (pageError || optionsError) {
    return <div>Error loading data</div>;
  }

  if (pageLoading || optionsLoading) {
    return <Loader />;
  }

  if (!pageData.page) {
    return <Custom404 />;
  }

  let page = pageData.page;

  let options = optionsData.options.siteOptions;

  return (
    <Layout page={page.slug} options={options}>
      <PageBuilder page={page.builder} />
    </Layout>
  );
};

export default Page;
