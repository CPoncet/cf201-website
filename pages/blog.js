import LastNews from "../components/acf-layouts/lastNews";
import Layout from "../components/layout";
import PageBuilder from "../components/pageBuilder";
import getBlogpage from "../lib/schemas/getBlogpage";
import getOptions from "../lib/schemas/getOptions";
import getPosts from "../lib/schemas/getPosts";

const Blog = ({ perPage, posts, page, builder, options, seo }) => {
  return (
    <Layout page="blog" options={options} seo={seo}>
      <PageBuilder page={builder} posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const perPage = 2;
  const posts = await getPosts();
  const page = await getBlogpage("", "blog");
  const options = await getOptions();

  return {
    props: {
      posts,
      perPage,
      seo: page.seo,
      builder: page.builder,
      options: options.siteOptions,
    },
  };
}

export default Blog;
