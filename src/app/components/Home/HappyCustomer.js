"use client"

import { useRef } from "react"
import CommentCard from "./CommentCard"

export default function HappyCustomer({ reviews }) {
    const scrollRef = useRef(null)
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
    }

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
    }
    return (
        <div className="">
            <div className="mx-5 md:py-10">
                <div className="flex md:mx-70 my-5 items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-extrabold">OUR HAPPY CUSTOMERS</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={scrollLeft}
                            className="p-1 bg-white rounded-2xl shadow-sm">
                            <img src="/left_arrow.png" className="w-[24px] h-[24px]" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="p-1 bg-white rounded-2xl shadow-sm">
                            <img src="/right_arrow.png" className="w-[24px] h-[24px]" />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="flex flex-nowrap gap-5 overflow-x-scroll scrollbar-hidden">
                    {reviews.map(rv => (
                        <CommentCard key={rv.id} review={rv} />
                    ))}
                </div>
            </div>
        </div>
    )
}