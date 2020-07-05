import React from "react";
import Layout from "../components/layout";
import axios from "axios";

function Blog(props) {
  return (
    <Layout social={props.social}>
      <h1>Blog</h1>

      <div>
        {props.posts.length &&
          props.posts.map((post) => (
            <article>
              <h2>{post.titre}</h2>

              <p>{post.extrait}</p>
            </article>
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await axios(`${process.env.STRAPI_ENDPOINT}/articles`).then(
    (res) => {
      return res.data;
    }
  );

  const social = await axios
    .get(`${process.env.STRAPI_ENDPOINT}/rs`)
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      posts,
      social,
    },
  };
}

export default Blog;
