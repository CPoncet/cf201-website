import React from "react";
import Link from "next/link";
import Layout from "../../../components/layout";
import getPosts from "../../../lib/schemas/getPosts";
import getPost from "../../../lib/schemas/getPost";
import getOptions from "../../../lib/schemas/getOptions";
import parse from "html-react-parser";
import { FiArrowLeft } from "react-icons/fi";

const Post = ({ post, options }) => {
  return (
    <Layout page={post.slug} options={options} seo={post.seo}>
      <section
        className="pt-32 pb-4 w-full relative"
        style={{
          background:
            post.imageUne && post.imageUne.imageEnAvant
              ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${post.imageUne.imageEnAvant.sourceUrl}') no-repeat center/cover`
              : "#f19066",
        }}
      >
        <div className="container mx-auto absolute left-0 right-0 top-0 py-4">
          <Link href="/blog">
            <a className="btn-secondary">
              <FiArrowLeft /> Retour
            </a>
          </Link>
        </div>
        <div className="container mx-auto h-full flex items-end">
          <h1 className="text-white">{post.title}</h1>
        </div>
      </section>
      <section className="container mx-auto pt-8">
        <p>{parse(post.content)}</p>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.edges.map(({ node }) => `/blog/article/${node.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getPost("", context.params.slug);
  const options = await getOptions();

  return {
    props: {
      post,
      options: options.siteOptions,
    },
  };
}

export default Post;