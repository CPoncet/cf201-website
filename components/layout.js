import React from "react";
import Header from "./header";
import Footer from "./footer";

import Head from "next/head";

function Layout(props) {
  return (
    <div className={`${props.page} relative`}>
      <Head>
        <title>Collectif 201</title>
      </Head>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
