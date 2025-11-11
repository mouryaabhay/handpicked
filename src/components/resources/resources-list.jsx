"use client";

import React, { useContext, useMemo } from "react";
import { ResourceProviderContext } from "@/contexts/resource-context";
import { Separator } from "@/components/ui/separator";
import ResourceCard from "./resource-card";

export default function ResourcesList({ query = "" }) {
  const { categories } = useContext(ResourceProviderContext);
  const searchTerm = query.toLowerCase().trim();

  const filteredCategories = useMemo(() => {
    if (!categories || categories.length === 0) return [];

    if (!searchTerm) return categories;

    return categories
      .map((category) => {
        const matchingResources = category.tags.filter((resource) => {
          const haystack = [
            resource.name,
            resource.url,
            ...(resource.tags || []),
            category.name,
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(searchTerm);
        });

        if (matchingResources.length > 0) {
          return { ...category, tags: matchingResources };
        }
        return null;
      })
      .filter(Boolean);
  }, [categories, searchTerm]);

  if (!filteredCategories || filteredCategories.length === 0)
    return <p>No resources found.</p>;

  return (
    <div className="space-y-8">
      {filteredCategories.map((category) => {
        const categoryId = category.name.toLowerCase().replace(/\s+/g, "-");

        return (
          <div
            key={category.name}
            id={categoryId}
            className="space-y-4 p-6 scroll-mt-20"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 px-0 justify-start w-full">
              <h1 className="text-2xl font-bold truncate">{category.name}</h1>
              <Separator className="flex-1" />
            </div>

            {/* Resource Cards */}
            <div className="flex flex-wrap gap-4 justify-start">
              {category.tags.map((resource) => (
                <ResourceCard
                  key={resource.url}
                  name={resource.name}
                  url={resource.url}
                  imageUrl={resource.imageUrl}
                  subCategory={resource.tags?.join(", ") || "General"}
                  className="flex-1 min-w-[200px] sm:min-w-[240px] md:min-w-[256px] max-w-xs"
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
