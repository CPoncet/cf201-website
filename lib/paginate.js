const paginate = (posts, perPage) => {
  if (!posts || !posts.edges) {
    return null;
  }

  const postsCount = posts.edges.length;

  const pagesCount = Math.ceil(postsCount / perPage);

  let paginatedPosts = [];

  const postsArr = posts.edges;
  for (let i = 0, j = 0; i < postsArr.length; i += perPage, j++) {
    paginatedPosts.push({
      page: j,
      items: postsArr.slice(i, i + perPage),
      hasNextPage: j + 1 !== pagesCount ? true : false,
      hasPreviousPage: j < pagesCount && j !== 0 ? true : false,
    });
  }

  return paginatedPosts;
};

export default paginate;
