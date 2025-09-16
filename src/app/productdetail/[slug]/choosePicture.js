"use client"
import { useState } from "react"

export default function ChoosePicture({ product }) {
    const [mainpic, setMainpic] = useState(null)

    if (!mainpic) {
        setMainpic(product.pictures[0])
    }

    return (
        <div className="flex md:flex-row flex-col md:w-1/2 w-screen gap-5 md:p-5">
            <div className="md:order-2 order-1">
                <img src={mainpic} alt="mainpic" className="w-[385px] h-[385px] md:w-[395px] md:h-[395px] mx-auto" />
            </div>
            <div
                className="cursor-pointer flex md:flex-col flex-wrap md:justify-start justify-between mx-4 md:order-1 order-2 gap-3">
                {product.pictures.map((url) => (
                    <img
                        onClick={() => setMainpic(url)}
                        className={`md:w-[190px] md:h-[190px] w-[110px] h-[110px] rounded-3xl
                        ${mainpic === url && (`border-2 rounded-3xl`)}
                        `}
                        src={url} key={url}
                    />)
                )}
            </div>
        </div>
    )
}