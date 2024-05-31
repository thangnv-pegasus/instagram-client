import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MyPostSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="grid grid-cols-3 gap-2 mt-5">
        {Array(3).map((item: any, index: any) => {
          return <Skeleton height={"300px"} width={"100%"} key={index} />;
        })}
      </div>
    </SkeletonTheme>
  );
}
