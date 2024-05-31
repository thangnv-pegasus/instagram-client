/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IMyPost } from "@/types/posts";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MyPostSkeleton from "./mypost-skeleton";
import PostMini from "../post-mini";
import { IProfile } from "@/types/profile";

const MyPosts = ({ user }: { user: IProfile }) => {
  const [data, setData] = useState<Array<IMyPost>>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        `/api/user/my-post?user_id=${user?.user_id}&page=${page}`,
        {
          method: "get",
        }
      ).then((res) => res.json());
      if (page === 1) {
        setData(response.data);
      } else {
        setData((prevData) => [...prevData, ...response.data]);
      }
      console.log(response.data);
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [user, page]);
  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={getData}
      hasMore={hasMore}
      loader={<MyPostSkeleton />}
    >
      {data.map(
        (item, index) =>
          user && <PostMini type="normal" key={index} post={item} user={user} />
      )}
    </InfiniteScroll>
  );
};

export default MyPosts;
