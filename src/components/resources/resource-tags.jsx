import React from "react";
import { Badge } from "@/components/ui/badge";

// Map badge values to variants/colors
const BADGE_VARIANTS = {
  new: "success",        // green
  featured: "destructive", // red
  popular: "accent",     // blue
};

export default function ResourceTags({ tags = [], badge }) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Render special badge first */}
      {badge && BADGE_VARIANTS[badge.toLowerCase()] && (
        <Badge variant={BADGE_VARIANTS[badge.toLowerCase()]} className="text-xs rounded-full">
          {badge}
        </Badge>
      )}

      {/* Render remaining tags as secondary badges */}
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-xs rounded-full">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
