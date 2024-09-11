import ProductList from "@/components/productList";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="flex flex-col w-full gap-4 pt-4">
        <section className="flex h-96 pl-4 pr-4 w-full box-border lg:justify-center">
          {" "}
          {/* box-border otherwise padding extends the page when calculating w-full */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="min-h-96">
          <ProductList />
        </section>
      </main>
    </div>
  );
}
