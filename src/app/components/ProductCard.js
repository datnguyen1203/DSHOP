"use client"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
export default function ProductCard({ product }) {
    const maxStars = 5;
    const rating = product.rating;

    const getStarIcon = (index) => {
        if (index + 1 <= Math.floor(rating)) {
            return <FaStar className="text-[#FFC633]" />;
        } else if (index < rating && rating % 1 >= 0.5) {
            return <FaStarHalfAlt className="text-[#FFC633]" />;
        } else {
            return null
        }
    };
    return (
        <div className="p-4">
            <div className="w-[198px] h-[200px] md:w-[295px] md:h-[298px] rounded-3xl overflow-hidden">
                <img src={product.pictures[0]} alt={product.name} className="w-full " />
            </div>
            <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center mt-1 gap-1">
                    {[...Array(maxStars)].map((_, i) => (
                        <span key={i}>
                            {getStarIcon(i)}
                        </span>
                    ))}
                    <span className="ml-1 text-sm">{product.rating}/5</span>
                </div>
                {product.discount === 0 ?
                    <p className="mt-1 font-bold text-lg">${product.price}</p> : (
                        <div className="flex items-center gap-2">
                            <p className="mt-1 font-bold text-lg">${(product.price * (1 - product.discount / 100)).toFixed(0)}</p>
                            <p className="mt-1 font-bold text-lg line-through text-gray-500">${product.price}</p>
                            <span className="text-sm text-[#FF3333] bg-[#ffebeb] py-1 px-3 rounded-2xl">-{product.discount}%</span>
                        </div>
                    )}
            </div>
        </div>
    )
}