import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ResourceBadge from "./resource-badge";
import { Badge } from "@/components/ui/badge";

export default function ResourceCard({
  name,
  url,
  imageUrl,
  tags = [],
  badges = [],
  className = "",
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setIsBookmarked(bookmarks.some((b) => b.url === url));
  }, [url]);

  const handleBookmark = (e) => {
    e.preventDefault();
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const isAlreadyBookmarked = bookmarks.some((b) => b.url === url);

    if (isAlreadyBookmarked) {
      const updated = bookmarks.filter((b) => b.url !== url);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
      toast("Bookmark removed", { description: `${name} has been removed from bookmarks.` });
    } else {
      const newBookmark = { name, url, imageUrl, tags, badges };
      localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, newBookmark]));
      setIsBookmarked(true);
      toast("Bookmarked!", { description: `${name} has been added to bookmarks.` });
    }
  };

  return (
    <Card className={`relative rounded hover:shadow-lg transition-shadow cursor-pointer overflow-hidden gap-0 py-0 ${className}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        {/* Image */}
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover bg-muted flex items-center justify-center text-sm text-muted-foreground"
            loading="lazy"
          />
        </div>

        {/* Bookmark Button */}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="icon-sm"
            onClick={handleBookmark}
            title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
            className={`transition-colors duration-200 ${
              isBookmarked
                ? "bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/40 dark:hover:bg-yellow-900/60"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 transition-colors duration-200 ${
                isBookmarked ? "fill-yellow-500 text-yellow-500" : "fill-transparent text-foreground"
              }`}
              strokeWidth={2}
            />
          </Button>
        </div>

        {/* Title */}
        <CardContent className="px-4 pt-4 pb-2">
          <CardTitle className="text-base font-semibold mb-1">{name}</CardTitle>

          {/* Tags + Badges on the same line */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                {tag}
              </Badge>
            ))}
            {badges.map((badge) => (
              <ResourceBadge key={badge} type={badge} />
            ))}
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
