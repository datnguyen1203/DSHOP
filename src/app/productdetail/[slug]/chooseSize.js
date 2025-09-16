"use client"
import { useState } from "react";

export default function ChooseSize({ product }) {
    const [checkSize, setCheckSize] = useState(product.size[0])

    return (
        <div>
            <h1 className="my-4 text-lg text-gray-500 ">Select Colors</h1>
            <div className="flex md:gap-2 gap-1">
                {product.size.map((size) => (
                    <div key={size} className="rounded-4xl items-center flex">
                        <button
                            onClick={() => setCheckSize(size)}
                            style={checkSize === size ? { backgroundColor: "black", color: "white" } :
                                { backgroundColor: "#f0f0f0", color: "#6a7282" }}
                            className="cursor-pointer text-sm md:text-xl md:w-[100px] w-[80px]  h-[46px] mr-3 rounded-3xl">{size}</button>
                    </div>
                ))}
            </div>
        </div>)
}