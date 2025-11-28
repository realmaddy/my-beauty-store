import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 lg:px-0">
        <Hero />
        <Categories />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
