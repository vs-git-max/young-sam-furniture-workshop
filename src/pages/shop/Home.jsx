import About from "@/components/shop/About";
import Categories from "@/components/shop/Categories";
import HeroSection from "@/components/shop/HeroSection";
import OurProducts from "@/components/shop/OurProducts";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Categories />
      <OurProducts />
      <About />
    </div>
  );
};

export default Home;
