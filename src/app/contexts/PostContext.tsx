import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const STORAGE_KEY = "postContextContent";
type PostContextType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
};

export const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [posts, dispatch] = useReducer(
     postReducer,
     typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("posts") || "[]")
        : []
  );

  useEffect(() => {
     setIsMounted(true);
     localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  if (!isMounted) {
     return null;
  }
  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
