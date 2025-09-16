import { ChevronDown } from "lucide-react";
import CommentCardDetail from "./CommentCardDetail";

export default function Reviews({ reviews }) {
    return (
        <div className="md:w-full w-[90%] mx-auto">
            <div>
                <div className="text-center">
                    <h1 className="md:text-2xl text-lg font-bold">Rating & Reviews</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="md:text-2xl text-lg">All Reviews <span className="text-gray-500"> ({reviews.length})</span></h1>
                    <div className="flex gap-5">
                        <button className="cursor-pointer md:w-[48px] w-[35px] h-[35px] md:h-[48px] bg-[#f0f0f0] md:p-2.5 p-1.5 rounded-full">
                            <img src="/filter.png" alt="filter" />
                        </button>
                        <button
                            className="hidden md:flex justify-between gap-5 cursor-pointer text-xl md:h-[48px] bg-[#f0f0f0] py-2.5 px-5 rounded-full"
                        >Lastest
                            <ChevronDown />
                        </button>
                        <button
                            className="cursor-pointer md:h-[48px] h-[35px] bg-black md:text-xl text-white md:py-2.5 px-5 rounded-full"
                        >Write a Review</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center py-5 gap-5">
                    {reviews.map(rv => (
                        <CommentCardDetail key={rv.id} review={rv} />
                    ))}
                </div>
                <div className="flex justify-center my-10">
                    <button
                        className="cursor-pointer py-3 w-[95%] w-auto md:px-15 px-10 rounded-3xl border border-gray-300 bg-white">Load More Reviews</button>
                </div>

            </div>
        </div>
    )
}