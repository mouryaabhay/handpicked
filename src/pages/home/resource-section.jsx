import React, { useState } from "react";
import ResourcesList from "@/components/resources/resources-list";
import Searchbar from "@/components/other/searchbar";
import { useDebounce } from "@/hooks/use-debounce";
import { DEBOUNCE_DELAY_MS } from "@/constant/global";

export default function ResourcesSection() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY_MS);

  return (
    <div
      id="resources-section"
      className="flex flex-col gap-4 my-6 mx-6 lg:mx-24"
    >
      <Searchbar value={query} onChange={setQuery} />
      <ResourcesList query={debouncedQuery} />
    </div>
  );
}
