import { useQuery, NetworkStatus } from "@apollo/client";
import parse from "html-react-parser";
import Link from "next/link";
import { GET_POSTS } from "../../lib/schemas/getPosts";
import Loader from "../loader";

const LastNews = ({ element }) => {
  const variables = {
    first: element.perPage,
    where: element.where,
  };

  const { data, loading, error, refetch, networkStatus } = useQuery(GET_POSTS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === NetworkStatus.refetch) return <Loader />;

  if (loading) {
    return <Loader />;
  }

  const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
    data.posts.pageInfo;

  return (
    <section className="container mx-auto">
      {element.lastnewsTitle ? <h2>{element.lastnewsTitle}</h2> : null}
      <div className="flex flex-wrap">
        {data && data.posts.edges.length
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
                      {node.excerpt ? parse(node.excerpt) : null}
                      <Link href={`/blog/article/${node.slug}`}>
                        <a className="btn-primary">Lire</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Aucun article n'a été écrit pour l'instant !"}
      </div>
      {element.pagination ? (
        <div>
          {hasPreviousPage ? (
            <a
              className="btn-primary"
              onClick={() =>
                refetch({
                  first: null,
                  after: null,
                  last: element.perPage,
                  before: startCursor || null,
                })
              }
            >
              Précédent
            </a>
          ) : null}

          {hasNextPage ? (
            <a
              className="btn-primary"
              onClick={() =>
                refetch({
                  first: element.perPage,
                  after: endCursor || null,
                  last: null,
                  before: null,
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
