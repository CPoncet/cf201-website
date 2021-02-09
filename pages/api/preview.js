import { useQuery } from "@apollo/client";
import { PAGE } from "../../lib/queries/page";

export default async (req, res) => {
  if (
    req.query.secret !== process.env.WORDPRESS_PREVIEW_SECRET ||
    !req.query.slug ||
    !req.query.type
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { data } = useQuery(PAGE, { variables: { id: req.query.slug } });

  if (!data.post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    post: data.post,
  });

  res.redirect(`/${data.post.slug}`);
};
