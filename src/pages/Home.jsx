import ResourcesList from "@/components/resources/resources-list";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 mb-24 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
            Built by developers,<br></br>for developers who care.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Every tool that matters — handpicked from across the web to create a
            growing library of frameworks, ideas, and resources that make building
            faster, smarter, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <div className="px-6 sm:px-12 lg:px-20">
        <ResourcesList />
      </div>
    </>
  );
}
