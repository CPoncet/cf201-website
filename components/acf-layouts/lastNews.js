import { useQuery, NetworkStatus } from "@apollo/client";
import { useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import getPosts, { GET_POSTS } from "../../lib/schemas/getPosts";
import Loader from "react-spinners/BeatLoader";

const LastNews = ({ element }) => {
  const { data, loading, error, refetch, networkStatus } = useQuery(GET_POSTS, {
    variables: { first: element.perPage },
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === NetworkStatus.refetch) return <Loader />;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap">
        {data
          ? data.posts.edges.map(({ node }, index) => (
              <div key={node.title} className="w-full md:w-1/3">
                <div className="p-4">
                  <div className="rounded-lg shadow-lg">
                    {node.imageUne.imageEnAvant ? (
                      <img
                        src={node.imageUne.imageEnAvant.sourceUrl}
                        alt={node.imageUne.imageEnAvant.altText}
                      />
                    ) : null}
                    <div className="p-4">
                      <h3>{node.title}</h3>
                      <p>{parse(node.excerpt)}</p>
                      <Link href={`/blog/article/${node.slug}`}>
                        <a className="btn-primary">Lire</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Aucun article"}
      </div>
      {element.pagination ? (
        <div>
          {data.posts.pageInfo.hasPreviousPage ? (
            <a
              className="btn-primary"
              onClick={() =>
                refetch({
                  first: undefined,
                  after: undefined,
                  last: element.perPage,
                  before: data.posts.pageInfo.startCursor,
                })
              }
            >
              Précédent
            </a>
          ) : null}

          {data.posts.pageInfo.hasNextPage ? (
            <a
              className="btn-primary"
              onClick={() =>
                refetch({
                  first: element.perPage,
                  after: data.posts.pageInfo.endCursor,
                  last: undefined,
                  before: undefined,
                })
              }
            >
              Suivant
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default LastNews;
