"use client"

import { FaCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function CommentCard({ review }) {
    const maxStars = 5;
    const rating = review.rating;

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
        <div className="flex-none p-5 w-[350px] h-[230px] md:w-[400px] md:h-[240px] rounded-2xl border border-gray-300 shadow-sm bg-white">
            <div className="flex mt-2 gap-1">
                {[...Array(maxStars)].map((_, i) => (
                    <span key={i}>
                        {getStarIcon(i)}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-1 font-bold text-lg my-2">
                <span>{review.name}</span>
                <FaCheckCircle className="text-[#01AB31]" />
            </div>
            <p className="text-gray-600 leading-relaxed">&quot;{review.review.length > 190 ? review.review.substring(0, 190) + "..." : review.review}&quot;</p>
        </div>
    )
}