"use client";

import Footer3 from "@/components/Footer3";
import Header3 from "@/components/Header3";
import { PostProvider } from "@/app/contexts/PostContext";
import { PostList } from "@/components/PostList";

const Page = () => {
  return (
    <PostProvider>
      <div className="container mx-auto">
        <Header3 />
        <PostList />
        <Footer3 />
      </div>
    </PostProvider>
  );
};

export default Page;
