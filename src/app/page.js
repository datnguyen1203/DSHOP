import { products, reviews } from "@/lib/data";
import ProductCard from "./components/ProductCard";
import NewArrivals from "./components/Home/NewArrivals";
import TopSelling from "./components/Home/TopSelling";
import DressStyle from "./components/Home/DressStyle";
import HappyCustomer from "./components/Home/HappyCustomer";
import Brands from "./components/Home/Brands";
import Banner from "./components/Home/Banner";


export default function Home() {
  return (
    <main >
      <Banner />
      <Brands />
      <NewArrivals products={products} />
      <hr className="w-[90%] md:w-[80%] mx-auto my-30 text-gray-300" />
      <TopSelling products={products} />
      <DressStyle />
      <HappyCustomer reviews={reviews} />
    </main>
  );
}
