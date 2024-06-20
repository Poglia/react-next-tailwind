"use client";

import { usePosts } from "@/app/contexts/PostContext";

const Footer3 = () => {
  const postCtx = usePosts();

  return <footer>Total de posts: {postCtx?.posts.length}</footer>;
};

export default Footer3;
