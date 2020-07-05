import React from "react";
import Layout from "../components/layout";
import axios from "axios";

export default (props) => <Layout social={props.social}>Index</Layout>;

export async function getStaticProps() {
  const social = await axios
    .get(`${process.env.STRAPI_ENDPOINT}/rs`)
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      social,
    },
  };
}
