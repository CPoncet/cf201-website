import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Layout from "../../components/layout";

import Hero from "../../components/parts/hero";
import Service from "../service/[uid]";

const BlogPost = ({ articles, article }) => {
  return (
    <Layout page={`article ${article.permalien}`}>
      <Hero noImage>
        <span className="uppercase font-black">Blog</span>
        <h1>{article.titre}</h1>
        <p>{article.intro}</p>
      </Hero>

      <section className="container mx-auto">{parse(article.contenu)}</section>

      <section className="container mx-auto">
        <h2>Nos autres articles</h2>
        <div className="flex flex-wrap -mx-4">
          {articles
            ? articles.map((article) => (
                <div className="w-full md:flex-1 mx-4 mb-4">
                  <Link href={`/blog/${article.permalien}`}>
                    <a>
                      <div className="icon-box w-full h-full bg-white shadow rounded p-4 flex flex-col items-center justify-center">
                        <img
                          className="mb-4"
                          src={article.image_en_avant.data["full_url"]}
                          alt={article.titre}
                        />
                        <h4 className="text-center">{article.titre}</h4>
                      </div>
                    </a>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesItem = await fetch(`${process.env.API_URL}items/articles`);
  const articles = await articlesItem.json();

  const params = articles.data.map((article) => ({
    params: { uid: article.permalien },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const articleItem = await fetch(
    `${process.env.API_URL}items/articles?filter[permalien]=${context.params.uid}&fields=*,image_en_avant.data.url`
  );

  const article = await articleItem.json();

  const articlesItems = await fetch(
    `${process.env.API_URL}items/articles?fields=*,image_en_avant.data.url`
  );

  const articles = await articlesItems.json();

  articles.data.splice(
    articles.data.findIndex((x) => x.permalien === context.params.uid),
    1
  );

  return {
    props: {
      article: article.data[0],
      articles: articles.data,
    },
  };
}

export default BlogPost;
