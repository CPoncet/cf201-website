import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

async function fetchAPI(query, { variables } = {}) {
  const res = await client.query({
    query,
    variables,
  });

  return res.data;
}

export default fetchAPI;
