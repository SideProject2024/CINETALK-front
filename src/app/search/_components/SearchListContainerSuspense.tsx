import { Suspense } from "react";

import SearchListContainer from "@/app/search/_components/SearchListContainer";
import { SearchListContainerSkeleton } from "@/app/search/_components/skeletons/Skeletons";

export default function SearchListContainerSuspense({
  query,
}: {
  query: string;
}) {
  return (
    <Suspense key={query} fallback={<SearchListContainerSkeleton />}>
      <SearchListContainer query={query} />
    </Suspense>
  );
}
