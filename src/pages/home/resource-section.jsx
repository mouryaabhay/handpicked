"use client";

import React, { useState } from "react";
import ResourcesList from "@/components/resources/resources-list";
import Searchbar from "@/components/other/searchbar";

export default function ResourcesSection() {
  const [query, setQuery] = useState("");

  return (
    <div
      id="resources-section"
      className="flex flex-col gap-4 my-6 mx-6 lg:mx-24"
    >
      <Searchbar value={query} onChange={setQuery} />
      <ResourcesList query={query} />
    </div>
  );
}
