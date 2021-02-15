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
            {seo.title ? (
              <title>{seo.title}</title>
            ) : (
              <title>Collectif 201</title>
            )}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="FR" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1"
            />
            {seo.metaDesc ? (
              <meta name="description" content={seo.metaDesc} />
            ) : null}
            {seo.metaKeywords ? (
              <meta name="keywords" content={seo.metaKeywords} />
            ) : null}
            <meta name="theme-color" content="#F19066" />
            <link rel="shortcut icon" href="/favicon.ico" />
            {seo.opengraphType ? (
              <meta property="og:type" content={seo.opengraphType} />
            ) : null}
            {seo.opengraphTitle ? (
              <meta property="og:title" content={seo.opengraphTitle} />
            ) : null}
            {seo.opengraphDescription ? (
              <meta
                property="og:description"
                content={seo.opengraphDescription}
              />
            ) : null}
            {seo.opengraphImage ? (
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
            ) : null}
            {seo.opnengraphUrl ? (
              <meta property="og:url" content={seo.opengraphUrl} />
            ) : null}
            <meta property="og:site_name" content="Collectif 201" />
            {seo.canonical ? (
              <link rel="canonical" href={seo.canonical} />
            ) : null}
            {seo.twitterTitle ? (
              <meta name="twitter:title" content={seo.twitterTitle} />
            ) : null}
            {seo.twitterDescription ? (
              <meta
                name="twitter:description"
                content={seo.twitterDescription}
              />
            ) : null}
            {seo.twitterImage ? (
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
            ) : null}
          </>
        ) : null}

        <script>document.documentElement.lang = 'fr'</script>

        <script
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
