"use client";

// Import Swiper React components
import "@/style/story-slide.css";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Item from "../story/item";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import StorySkeleton from "../story/story-skeleton";
import { useEffect, useState } from "react";
import { IStoryPaginate } from "@/types/home";
import InfiniteScroll from "react-infinite-scroll-component";

const StorySlide = () => {
  const [items, setItems] = useState<Array<IStoryPaginate>>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  const fetchItems = async (page: number) => {
    try {
      const response = await fetch(`/api/home/story-paginate?page=${page}`, {
        method: "get",
      });
      const res = await response.json();
      if (page === 1) {
        setItems(res.data);
      } else {
        setItems((prevItems) => [...prevItems, ...res.data]);
      }
      if (res.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={9}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<StorySkeleton />}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Item story={item} />
              </SwiperSlide>
            );
          })}
        </InfiniteScroll>
      </Swiper>
    </div>
  );
};

export default StorySlide;
