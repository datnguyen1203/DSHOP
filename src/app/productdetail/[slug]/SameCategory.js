"use client"
import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/app/components/ProductCard";

export default function SameCategory({ category }) {
    const listproduct = products.filter(p => p.category.match(category))
    return (
        <div className="md:pt-10">
            <h1 className="text-3xl md:mx-0 mx-20 font-extrabold text-center my-10">YOU MIGHT ALSO LIKE</h1>
            <div className="flex overflow-x-scroll md:flex-wrap gap-4 items-center md:justify-center">
                {listproduct.map(product => (
                    <Link href={"/productdetail/" + product.id} key={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                )).slice(0, 4)}
            </div>
        </div>
    );
}
