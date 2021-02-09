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

const Page = ({ previewData }) => {
  let page;

  const {
    data: optionsData,
    loading: optionsLoading,
    error: optionsError,
  } = useQuery(OPTIONS);

  if (previewData) {
    page = previewData;
  } else {
    const router = useRouter();
    const { slug } = router.query;

    const {
      data: pageData,
      loading: pageLoading,
      error: pageError,
    } = useQuery(PAGE, { variables: { id: slug } });
  }

  if (pageError || optionsError) {
    return <div>Error loading data</div>;
  }

  if (pageLoading || optionsLoading) {
    return <Loader />;
  }

  if (!previewData) {
    if (!pageData.page) {
      return <Custom404 />;
    }
    page = pageData.page;
  }

  let options = optionsData.options.siteOptions;

  return (
    <Layout page={page.slug} options={options}>
      <PageBuilder page={page.builder} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await fetch(process.env.API_URL, PAGES);

  console.log(data);

  return {
    paths: data.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  if (context.preview) {
    return {
      props: {
        previewData: context.previewData,
      },
    };
  }
}

export default Page;
