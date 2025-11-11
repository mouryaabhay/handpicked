"use client";

import React from "react";
import ResourcesList from "@/components/resources/resources-list";
import Searchbar from "@/components/other/searchbar";

export default function ResourcesSection() {
  return (
    <div
      id="resources-section"
      className="flex flex-col gap-4 my-6 mx-14 sm:px-12 lg:px-20"
    >
      <Searchbar />
      <ResourcesList />
    </div>
  );
}
