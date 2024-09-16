import Hero from "@/components/hero";
import ProductList from "@/components/productList";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="flex flex-col w-full gap-4 pt-4">
        <section className="flex h-96 pl-4 pr-4 w-full box-border lg:justify-center">
          <Hero />
        </section>
        <section className="min-h-96">
          <ProductList />
        </section>
      </main>
      <Footer />
    </div>
  );
}
