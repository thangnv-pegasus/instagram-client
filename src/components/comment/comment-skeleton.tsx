import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CommentSkeleton = () => {
  return (
    <div
      className="p-4"
    >
      <SkeletonTheme color="#ddd" highlightColor="#ccc">
        <div className="flex">
          <div>
            <Skeleton height={"50px"} width={"50px"} />
          </div>
          <p className="flex-1 pl-5">
            <Skeleton width="100%" count={2} />
          </p>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CommentSkeleton;
