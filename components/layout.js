import React from "react";
import Header from "./header";
import Footer from "./footer";

import Head from "next/head";

function Layout({ page, children, options }) {
  return (
    <div className={`${page} relative`}>
      <Head>
        <title>Collectif 201</title>
        <meta name="robots" content="nofollow" />

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8501326.js"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {options.custom_scripts ? (
          <script>{options.custom_scripts}</script>
        ) : null}

        {options.custom_styles ? <style>{options.custom_styles}</style> : null}
      </Head>
      <Header
        mainLogo={options.main_logo}
        mainMenu={options.main_menu}
        social={options.social}
      />

      <main>{children}</main>

      <Footer
        mainLogo={options.main_logo}
        mainMenu={options.main_menu}
        legalMenu={options.legal_menu}
        introRs={options.intro_rs}
        social={options.social}
        text={options.footer_text}
      />
    </div>
  );
}

export default Layout;
