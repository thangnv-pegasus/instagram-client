"use client";
import { List, AutoSizer, InfiniteLoader } from "react-virtualized";
import { IPostPaginate } from "@/types/home";
import { Key, useEffect, useState } from "react";
import Post from "@/components/post";
const ListPost = () => {
  //   const [page, setPage] = useState<number>(1);
  //   const [posts, setPosts] = useState<Array<IPostPaginate>>([]);
  //   const [hasMore, setHasMore] = useState(true);

  //   const getPosts = async () => {
  //     const response = await fetch(`/api/home/posts-paginate?page=${page}`, {
  //       method: "get",
  //     }).then((res) => res.json());
  //     if (response?.status == 200) {
  //       setPosts(response.posts);
  //     }
  //     setPosts((pre) => {
  //       if (pre.length > 0) {
  //         return [...pre, ...response.posts];
  //       }
  //       return [];
  //     });
  //     if (response.posts.length === 0) {
  //       setHasMore(false);
  //     }
  //     setPage((pre) => pre + 1);
  //     // console.log(response)
  //   };

  //   const isRowLoaded = ({ index }: { index: any }) => !!posts[index];

  //   const loadMoreRows = () => {
  //     if (hasMore) {
  //       return getPosts();
  //     }
  //     return Promise.resolve();
  //   };

  //   const rowRenderer = ({ key, index }: { key: Key; index: number }) => (
  //     <div key={key}>
  //       {posts[index] ? (
  //         <Post
  //           post={{
  //             images_id: posts[index].images_id,
  //             post_detail: posts[index].post_detail,
  //             post_id: posts[index].post_id,
  //             user_id: posts[index].user_id,
  //             user_profile: posts[index].user_profile,
  //           }}
  //         />
  //       ) : (
  //         "Loading..."
  //       )}
  //     </div>
  //   );

  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  const [items, setItems] = useState<Array<IPostPaginate>>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (page: number) => {
    const response = await fetch(`/api/home/posts-paginate?page=${page}`);
    const newData = await response.json();
    console.log(newData);
    return newData.posts.data;
  };

  const loadMoreRows = async () => {
    if (isNextPageLoading) {
      console.log("next page loading...");
      return;
    }

    setIsNextPageLoading(true);
    try {
      const newData = await fetchData(page);
      console.log("newdata loadMoreRows", newData);
      setItems((prevItems) => [...prevItems, ...newData]);
      setIsNextPageLoading(false);
      if (newData.length === 0) {
        setHasNextPage(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error loading more rows:", error);
      setIsNextPageLoading(false);
    }
  };
  useEffect(() => {
    loadMoreRows();
  }, []);

  const isRowLoaded = ({ index }: { index: number }) => !!items[index];

  const RenderRow = ({
    key,
    index,
  }: {
    key: string;
    index: number;
  }) => {
    const item = items[index];
    return (
      <div key={key}>
        {item ? (
          <Post
            post={{
              images_id: item.images_id,
              post_detail: item.post_detail,
              post_id: item.post_id,
              user_id: item.user_id,
              user_profile: item.user_profile,
            }}
          />
        ) : (
          "Loading..."
        )}
      </div>
    );
  };

  return (
    <>
      {/* {posts.map((item: IPostPaginate, index: Key) => {
        return (
          <Post
            post={{
              images_id: item.images_id,
              post_detail: item.post_detail,
              post_id: item.post_id,
              user_id: item.user_id,
              user_profile: item.user_profile,
            }}
            key={index}
          />
        );
      })} */}
      {/* <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={hasMore ? posts.length + 1 : posts.length}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                height={height}
                width={width}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={posts.length}
                rowHeight={50}
                rowRenderer={rowRenderer}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer> */}
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={hasNextPage ? items.length + 1 : items.length}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                height={height}
                width={width}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={items.length}
                rowHeight={50}
                rowRenderer={RenderRow}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </>
  );
};

export default ListPost;
