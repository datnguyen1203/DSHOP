"use client"
import Link from "next/link";
import ProductCard from "../ProductCard";

export default function TopSelling({ products }) {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-center my-10">TOP SELLING</h1>
            <div className="flex overflow-x-scroll md:flex-wrap gap-4 items-center md:justify-center">
                {products.map(product => (
                    <Link href={"/productdetail/" + product.id} key={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                )).slice(5, 9)}
            </div>
            <div className="flex justify-center my-10">
                <button
                    onClick={() => console.log("View All Clicked")}
                    className="py-3 w-[95%] md:w-auto md:px-15 rounded-3xl border border-gray-300 bg-white">View All</button>
            </div>
        </div>
    );
}
