import React from "react";
import Layout from "../components/layout";
import Hero from "../components/acf-layouts/hero";
import PageBuilder from "../components/pageBuilder";

const Page = ({ page, options }) => {
  return (
    <Layout page={page.slug} options={options}>
      <PageBuilder page={page} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/pages`);
  const pages = await res.json();

  const paths = pages.map((page) => ({
    params: {
      slug: page.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const fetchedPage = await fetch(
    `${process.env.API_URL}/pages?slug=${context.params.slug}`
  );

  const page = await fetchedPage.json();

  const fetchedOptions = await fetch(process.env.API_OPTIONS);

  const options = await fetchedOptions.json();

  return {
    props: {
      page: page[0],
      options: options.acf,
    },
  };
}

export default Page;
