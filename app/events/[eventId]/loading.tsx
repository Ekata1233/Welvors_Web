export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-[340px] w-full bg-[#EAE6E2]" />

      {/* Content Skeleton */}
      <div className="mx-auto max-w-[1280px] space-y-5 px-4 py-5">

        <div className="h-[130px] rounded-[24px] bg-[#F0EEEB]" />

        <div className="h-[60px] rounded-[18px] bg-[#F0EEEB]" />

        <div className="h-[180px] rounded-[24px] bg-[#F0EEEB]" />

      </div>
    </div>
  );
}