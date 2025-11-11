import React from "react";
import { Badge } from "@/components/ui/badge";

const badgeStyles = {
  new: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400",
  featured: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400",
  popular: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400",
};

export default function ResourceBadge({ type }) {
  if (!type) return null;
  return (
    <Badge className={`text-xs rounded-full ${badgeStyles[type] || ""}`}>
      {type.toUpperCase()}
    </Badge>
  );
}
