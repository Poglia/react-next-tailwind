"use client";

import { PostContext } from "@/app/contexts/PostContext";
import { useContext } from "react";

const Footer3 = () => {
    const postCtx = useContext(PostContext);

    return (
        <footer>
            Total de posts: {postCtx?.posts.length}
        </footer>
    )
};

export default Footer3;
