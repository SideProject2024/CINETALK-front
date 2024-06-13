"use client";

import { useSearchParams } from "next/navigation";

import Footer from "@/app/(main)/_components/Footer";
import SearchListContainerSuspense from "@/app/search/_components/SearchListContainerSuspense";

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";
  return (
    <div className="mt-3 Tablet:mt-4 Laptop:mt-8 Desktop:mt-16">
      <SearchListContainerSuspense key={query} query={query} />
      <Footer />
    </div>
  );
}
