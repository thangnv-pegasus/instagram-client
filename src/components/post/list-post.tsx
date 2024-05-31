"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "@/components/post";
import PostSkeleton from "./post-skeleton";
import { IPostPaginate } from "@/types/posts";

const ListPost = () => {
  const [items, setItems] = useState<Array<IPostPaginate>>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchItems = async (page: number) => {
    try {
      const response = await fetch(`/api/home/posts-paginate?page=${page}`);
      const data = await response.json();
      console.log(data)
      if (page === 1) {
        setItems(data.posts.data);
      } else {
        setItems((prevItems) => [...prevItems, ...data.posts.data]);
      }

      if (data.posts.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);
  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <>
            <PostSkeleton />
            <PostSkeleton />
          </>
        }
        endMessage={
          <p className="text-black text-xs text-center mt-10">
            Đã xem hết các bài viết, hãy follow thêm bạn bè để xem được nhiều
            thứ hay ho nhé!
          </p>
        }
      >
        {items.map((item, index) => (
          <Post post={item} key={index} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ListPost;
