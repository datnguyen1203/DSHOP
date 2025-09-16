"use client"
import { Check } from "lucide-react";
import { useState } from "react";

export default function CheckColor({ product }) {
    const [checkColor, setCheckColor] = useState(product.color[0])

    return (
        <div>
            <h1 className="my-4 text-lg text-gray-500 ">Select Colors</h1>
            <div className="flex gap-2">
                {product.color.map((color) => (
                    <div className="cursor-pointer h-[37px] w-[37px] rounded-4xl items-center flex justify-center" onClick={() => setCheckColor(color)} key={color} style={{ backgroundColor: color }}>
                        {checkColor === color && (
                            <Check className="text-white" />
                        )}
                    </div>
                ))}
            </div>
        </div>)
}