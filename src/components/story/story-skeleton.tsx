"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const StorySkeleton = () => {
  return (
    <SkeletonTheme color="#ddd" highlightColor="#ccc" width={'60px'}>
      <Skeleton height={60} borderRadius={'50%'} width={60}/>
      <p>
        <Skeleton count={1} />
      </p>
    </SkeletonTheme>
  );
};

export default StorySkeleton;
