"use client"
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function ChooseQuantity({ product }) {
    const [quantity, setQuantity] = useState(0)


    return (<div className="flex w-fit gap-5 md:gap-12 bg-[#f0f0f0] py-5 px-5 md:text-2xl text-lg rounded-full">
        <button className="cursor-pointer"
            onClick={() => (
                quantity <= 0 ? (setQuantity(0)) : (setQuantity(quantity - 1))
            )}
        ><MinusIcon /></button>
        <p>{quantity}</p>
        <button className="cursor-pointer"
            onClick={() => (
                quantity >= product.quantity ? (setQuantity(product.quantity)) : (setQuantity(quantity + 1))
            )}
        ><PlusIcon /></button>
    </div>)
}