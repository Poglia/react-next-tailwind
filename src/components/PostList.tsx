import { PostContext } from "@/app/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
  const postCtx = useContext(PostContext);

  const handleRemovePost = (id: number) => {
    postCtx?.dispatch({ type: "remove", payload: { id } });
  }
  return (
    <div>
      {postCtx?.posts.map(item => (
        <div key={item.id} className="border-b border-gray-500 p-3">
            <div className="text-xl font-bold mb-2">{item.title}</div>
            <div className="text-sm">{item.body}</div>
            <button onClick={() => handleRemovePost(item.id)}>[ remover ]</button>
        </div>
      ))}
    </div>
  );
};
