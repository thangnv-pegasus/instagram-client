import { IPOST } from "@/types/posts";
import PostMini from "./post-mini";

const ShortPost = ({
  bigPostPosition = "left",
  posts = [],
}: {
  bigPostPosition: "left" | "right";
  posts: Array<IPOST>;
}) => {
  return (
    <div className="grid grid-cols-3 gap-1 items-stretch">
      <PostMini type="big" classess={bigPostPosition === 'left' ? '' : 'order-1 '}/>
      <div className="flex flex-col h-600px gap-1">
        <PostMini type="normal" key={1}/>
        <PostMini type="normal" key={2} />
      </div>
      <div className="flex flex-col h-600px gap-1">
        <PostMini type="normal" />
        <PostMini type="normal" />
      </div>
    </div>
  );
};

export default ShortPost;
