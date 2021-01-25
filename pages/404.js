import React from "react";
import { OPTIONS } from "../lib/queries/options";
import { useQuery } from "@apollo/client";
import Loader from "../components/loader";
import Link from "next/link";
import Layout from "../components/layout";

const Custom404 = () => {
  const {
    data: optionsData,
    loading: optionsLoading,
    error: optionsError,
  } = useQuery(OPTIONS);

  if (optionsError) {
    return <div>Error loading data</div>;
  }

  if (optionsLoading) {
    return <Loader />;
  }

  let options = optionsData.options.siteOptions;

  return (
    <Layout page="404" options={options}>
      <section className="container mx-auto pt-8">
        <h1>Oups...</h1>
        <p>Nous n'avons pas pu trouver cette page...</p>
        <Link href="/">
          <button className="mb-4">Retour à l'accueil...</button>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
