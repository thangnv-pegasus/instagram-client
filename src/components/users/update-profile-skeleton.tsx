"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const UpdateProfileSkeleton = () => (
  <div className="min-h-screen w-full">
    <SkeletonTheme color="#ddd" highlightColor="#ccc">
      <Skeleton height={65} />
      <div className="my-10">
        <Skeleton width={100} height={20} />
        <Skeleton height={65} />
      </div>
      <div className="my-10">
        <Skeleton width={100} height={20} />
        <Skeleton height={65} />
      </div>
      <div className="my-10">
        <Skeleton width={100} height={20} />
        <Skeleton height={65} />
      </div>
      <div className="my-10">
        <Skeleton width={100} height={20} />
        <Skeleton height={65} />
      </div>
    </SkeletonTheme>
  </div>
);

export default UpdateProfileSkeleton;
