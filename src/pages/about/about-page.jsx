import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GOOGLE_FORM_URL } from "@/constant/global";
import { Search, Shapes } from "lucide-react";

export default function AboutPage() {
  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          About Handpicked
        </h1>
        <p className="text-muted-foreground text-lg">
          Handpicked curates the best developer tools, libraries, and
          resources — saving you hours of research and helping you build faster,
          smarter, and cleaner.
        </p>
      </div>

      <Separator className="my-8" />

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            Developers spend too much time searching for the right tools.
            Handpicked was built to solve that. Every resource is vetted by
            real engineers — ensuring quality, performance, and long-term
            reliability. No noise. Just essentials.
          </p>
        </div>
        <Card className="border-green-500/20 bg-green-500/5 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              100% Curated
            </h3>
            <p className="text-muted-foreground">
              Every item is reviewed manually by developers who actually use the
              tools.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          What Makes Handpicked Different?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Curated by Developers",
              desc: "Every recommendation is hand-tested by experienced engineers.",
            },
            {
              title: "Quality Over Quantity",
              desc: "We focus on the best—not every option available.",
            },
            {
              title: "Community-Driven",
              desc: "Suggestions and feedback come directly from the dev community.",
            },
            {
              title: "Always Updated",
              desc: "We keep our lists fresh, removing outdated tools regularly.",
            },
          ].map((item) => (
            <Card key={item.title} className="transition hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Join the Developer-First Curation Movement 🚀
        </h2>
        <p className="text-muted-foreground mb-6">
          Explore the best tools and contribute your favorites to help the next dev.
        </p>

        {/* Updated Button */}
        <div className="flex gap-4 flex-wrap align-middle justify-center">
          <Button size="lg" asChild>
            <a href="/">
              <Search /> Explore Collections
            </a>
          </Button>
          <Button size="lg" variant="secondary" onClick={handleOpenForm}>
            <Shapes />
            Submit Resource
          </Button>
        </div>
      </div>
    </div>
  );
}
