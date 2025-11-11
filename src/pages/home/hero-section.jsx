"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Shapes } from "lucide-react";
import { handleScroll } from "@/utils/handle-scroll";

export default function HeroSection() {
  const handleOpenForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf-FRDJzHWCEKRV9dWjC6dV9TScyBWqsXo6nZ3u37IJtBI4Ng/viewform?usp=sharing&ouid=100678720259994445996",
      "_blank"
    );
  };

  return (
    <section
      id="hero-section"
      className="my-20 flex flex-col items-center justify-center px-4 lg:px-6 text-center"
    >
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Handpicked.dev is now live!
      </div>

      <div className="max-w-5xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
          Built by developers,
          <br />
          for developers who care.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
          Every tool that matters — handpicked from across the web to create a
          growing library of frameworks, ideas, and resources that make
          building faster, smarter, and more enjoyable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="sm" onClick={() => handleScroll("resources-section")}>
            <Search />
            Explore
          </Button>
          <Button size="sm" variant="secondary" onClick={handleOpenForm}>
            <Shapes />
            Submit Resource
          </Button>
        </div>
      </div>
    </section>
  );
}
