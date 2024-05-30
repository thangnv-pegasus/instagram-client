import { ICcomment } from "@/types/comments";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentItem from "./item";
import CommentSkeleton from "./comment-skeleton";
const InfiniteComment = ({ post_id }: { post_id: Number }) => {
  const [items, setItems] = useState<Array<ICcomment>>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    try {
      const fetchApi = await fetch(
        `api/comment/list?post=${post_id}&page=${page}`,
        {
          method: "get",
        }
      );
      const response = await fetchApi.json();
      if (response.comments.length > 0) {
        if (items.length === 0) {
          setItems(response.comments);
        } else {
          setItems([...items, ...response.comments]);
        }
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchItems}
        hasMore={hasMore}
        loader={
          <>
            <CommentSkeleton key={1} />
            <CommentSkeleton key={2} />
            <CommentSkeleton key={3} />
          </>
        }
      >
        {items.map((item, index) => (
          <CommentItem comment={item} key={index} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteComment;
