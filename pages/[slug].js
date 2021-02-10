import React from "react";
import Layout from "../components/layout";
import PageBuilder from "../components/pageBuilder";
import { getPages, getPage, getOptions } from "../lib/api";

const Page = ({ page, builder, options }) => {
  return (
    <Layout page={page.slug} options={options} seo={page.seo}>
      <PageBuilder page={builder} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const pages = await getPages();

  return {
    paths: pages.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const page = await getPage("", context.params.slug);
  const options = await getOptions();

  return {
    props: {
      page,
      builder: page.builder,
      options: options.siteOptions,
    },
  };
}

export default Page;
