import Layout from "../../../components/layout";
import getBlogCats from "../../../lib/schemas/getBlogCats";
import getOptions from "../../../lib/schemas/getOptions";
import LastNews from "../../../components/acf-layouts/lastNews";
import { useRouter } from "next/router";
import getBlogCat from "../../../lib/schemas/getBlogCat";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const Category = ({ category, options }) => {
  const router = useRouter();

  return (
    <Layout options={options}>
      <section className="pt-32 pb-4 w-full relative bg-primary">
        <div className="container mx-auto absolute left-0 right-0 top-0 py-4">
          <Link href="/blog">
            <a className="btn-secondary">
              <FiArrowLeft /> Retour
            </a>
          </Link>
        </div>
        <div className="container mx-auto h-full flex flex-col">
          <h1 className="text-white pt-4">
            Catégorie{" "}
            <span className="bg-white text-primary px-2 py-1">
              {category.name}
            </span>
          </h1>
        </div>
      </section>
      <LastNews
        element={{ perPage: 6, where: { categoryName: router.query.slug } }}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const cats = await getBlogCats();

  return {
    paths: cats.edges.map(({ node }) => `/blog/cat/${node.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const options = await getOptions();
  const category = await getBlogCat("", context.params.slug);

  return {
    props: {
      category,
      options: options.siteOptions,
    },
  };
}

export default Category;
