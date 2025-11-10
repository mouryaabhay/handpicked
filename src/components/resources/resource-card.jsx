"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function ResourceCard({ name, url, imageUrl, subCategory = "New" }) {
  const handleCopy = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(url);
    toast("Link copied!", {
      description: `${name} link has been copied to clipboard.`,
    });
  };

  const handleShare = async (e) => {
    e.preventDefault();
    try {
      if (navigator.share) {
        await navigator.share({ title: name, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast("Link copied!", {
          description: `${name} link has been copied to clipboard.`,
        });
      }
    } catch {
      // silently fail, no toast needed
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="relative rounded-2xl hover:shadow-lg transition-shadow cursor-pointer overflow-hidden py-0 gap-0">
        {/* Image Wrapper (16:9 ratio) */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-sm text-muted-foreground">
              No Image
            </div>
          )}
        </div>

        {/* Floating action buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon-sm"
            variant="secondary"
            onClick={handleCopy}
            title="Copy Link"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            size="icon-sm"
            variant="secondary"
            onClick={handleShare}
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Title */}
        <CardContent className="px-0 mx-4 mt-4 mb-2">
          <CardTitle className="text-base font-semibold">{name}</CardTitle>
        </CardContent>

        {/* Badge */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs rounded-full">
            {subCategory}
          </Badge>
        </div>
      </Card>
    </a>
  );
}
