import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import Hero from "../components/parts/hero";

import Slider from "react-slick";

function Blog({ articles, categories }) {
  const page = "blog";

  const pageLimit = 4;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [cats, setCats] = useState([]);
  const [currentCats, setCurrentCats] = useState([]);

  useEffect(() => {
    setData(articles);
    setCats(categories.map((item) => item.id));
  }, []);

  useEffect(() => {
    console.log(currentCats);
    setCurrentData(
      data.filter((x) => {
        return currentCats.includes(x.categorie.id);
      })
    );
    console.log(currentData);
  }, [currentCats]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  const handleCat = (id) => {
    setCurrentCats(cats.filter((x) => x === id));
  };

  const featured = articles.filter((x) => x["mis_en_avant"] === true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Hero noImage>
        <h1>Blog</h1>
        <p>
          Le Collectif 201 est une équipe de créateurs dynamiques et compétents
          pour construire avec vous tous vos projets de communication numérique.
        </p>
      </Hero>
      {featured ? (
        <section className="container mx-auto pt-0">
          <Slider {...sliderSettings}>
            {featured.map((item) => (
              <div className="slide flex flex-wrap">
                <div className="w-full sm:w-1/2">
                  <img
                    className="rounded-lg"
                    src={item.image_en_avant.data["full_url"]}
                    alt={item.titre}
                  />
                </div>
                <div className="w-full sm:w-1/2 flex items-center">
                  <div>
                    <h2 className="text-left mb-8">{item.titre}</h2>
                    <p className="mb-8">{item.intro}</p>
                    <Link href={`/blog/${item.permalien}`}>
                      <button>En savoir plus</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      ) : null}
      <section className="container mx-auto">
        <div className="flex flex-wrap">
          {categories.map((cat) => (
            <button onClick={() => handleCat(cat.id)}>{cat.nom}</button>
          ))}
        </div>
        <div className="flex flex-wrap blog-index">
          {currentData.map((article) => (
            <div className="w-full sm:w-1/2 flex flex-wrap mb-8">
              <div className="w-full sm:w-1/2 flex items-center">
                <img
                  className="rounded-lg"
                  src={article.image_en_avant.data["full_url"]}
                  alt={article.titre}
                />
              </div>

              <div className="w-full sm:w-1/2 flex items-center">
                <div>
                  <h4 className="mb-4">{article.titre}</h4>

                  <p className="mb-4">{article.intro}</p>

                  <Link href={`/blog/${article.permalien}`}>
                    <button>En savoir plus</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <Paginator
            totalRecords={data.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageContainerClass="pagination mx-auto"
            pageItemClass="inline-block"
            pageActiveClass="active"
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const articlesData = await fetch(
    `${process.env.API_URL}items/articles?fields=*,image_en_avant.data.url`
  );

  const articles = await articlesData.json();

  const categoriesData = await fetch(
    `${process.env.API_URL}items/categories_articles`
  );

  const categories = await categoriesData.json();

  return {
    props: {
      articles: articles.data,
      categories: categories.data,
    },
  };
}

export default Blog;
