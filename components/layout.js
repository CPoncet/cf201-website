import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

function Layout({ page, children, options, seo }) {
  return (
    <div className={`${page} relative`}>
      <Head>
        {seo ? (
          <>
            <title>{seo.title}</title>
            <meta name="robots" content="index, follow" />

            <meta charset="UTF-8" />
            <meta name="language" content="FR" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1"
            />
            <meta name="description" content={seo.metaDesc} />
            <meta name="keywords" content={seo.metaKeywords} />
            <meta name="theme-color" content="#F19066" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta property="og:type" content={seo.opengraphType} />
            <meta property="og:title" content={seo.opengraphTitle} />
            <meta
              property="og:description"
              content={seo.opengraphDescription}
            />
            <meta
              property="og:image"
              content={
                seo.opengraphImage
                  ? seo.opengraphImage.sourceUrl
                  : options.mainLogo
                  ? options.mainLogo.sourceUrl
                  : ""
              }
            />
            <meta property="og:url" content={seo.opengraphUrl} />
            <meta property="og:site_name" content={seo.opengraphSiteName} />
            <link rel="canonical" href={seo.canonical} />
            <meta name="twitter:title" content={seo.twitterTitle} />
            <meta name="twitter:description" content={seo.twitterDescription} />
            <meta
              name="twitter:image"
              content={
                seo.twitterImage
                  ? seo.twitterImage.sourceUrl
                  : options.mainLogo
                  ? options.mainLogo.sourceUrl
                  : ""
              }
            />
          </>
        ) : null}

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

        {options.customScripts ? (
          <script>{options.customScripts}</script>
        ) : null}

        {options.customStyles ? <style>{options.customStyles}</style> : null}
      </Head>
      <Header
        mainLogo={options.mainLogo.sourceUrl}
        mainMenu={options.mainMenu}
        social={options.social}
      />

      <main>{children}</main>

      <Footer
        mainLogo={options.mainLogo.sourceUrl}
        mainMenu={options.mainMenu}
        legalMenu={options.legalMenu}
        introRs={options.introRs}
        social={options.social}
        text={options.footerText}
      />
    </div>
  );
}

export default Layout;
