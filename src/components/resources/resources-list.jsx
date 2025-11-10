import React, { useContext } from "react";
import { ResourceProviderContext } from "@/contexts/resource-context";
import { Separator } from "@/components/ui/separator";
import ResourceCard from "./resource-card";

export default function ResourcesList() {
  const { categories } = useContext(ResourceProviderContext);

  if (!categories || categories.length === 0)
    return (
      <p className="text-center text-muted-foreground text-lg py-10">
        No resources available.
      </p>
    );

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          </div>

          <Separator className="mb-6" />

          <div className="space-y-10">
            {category.subCategories.map((subCategory) => (
              <div key={subCategory.name} className="space-y-4">
                {/* SubCategory Header */}
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">{subCategory.name}</h2>
                  <div className="flex-1 h-px bg-muted" />
                </div>

                {/* Resources Grid */}
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {subCategory.resources.map((resource) => (
                    <ResourceCard
                      key={resource.name}
                      name={resource.name}
                      url={resource.url}
                      iconUrl={resource.iconUrl}
                      imageUrl={resource.imageUrl}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
