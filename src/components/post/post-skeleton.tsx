"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PostSkeleton = () => (
  <div
    style={{
      padding: "20px",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    }}
  >
    <SkeletonTheme color="#ddd" highlightColor="#ccc">
      <h2>
        <Skeleton width="20%" />
      </h2>
      <Skeleton height={400} />
      <p>
        <Skeleton count={4} width={'40%'}/>
      </p>
      <Skeleton count={1} width={'100%'}/>
    </SkeletonTheme>
  </div>
);

export default PostSkeleton;
