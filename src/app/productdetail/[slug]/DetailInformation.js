import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import CheckColor from "./checkColor";
import ChooseQuantity from "./chooseQuantity";
import ChooseSize from "./chooseSize";

export default function DetailInformation({ product }) {
    //rating
    const maxStars = 5;
    const rating = product.rating;

    const getStarIcon = (index) => {
        if (index + 1 <= Math.floor(rating)) {
            return <FaStar className="text-[#FFC633]" size={25} />;
        } else if (index < rating && rating % 1 >= 0.5) {
            return <FaStarHalfAlt className="text-[#FFC633]" size={25} />;
        } else {
            return null
        }
    };
    return (<div className="md:w-1/2 my-5 mx-5">
        <div className="">
            <h1 className="uppercase text-pretty font-extrabold text-3xl md:text-4xl">{product.name}</h1>
            <div className="flex items-center my-3 gap-1">
                {[...Array(maxStars)].map((_, i) => (
                    <span key={i}>
                        {getStarIcon(i)}
                    </span>
                ))}
                <div>
                    <p className="ml-1 my-auto pt-1 text-xl">{product.rating}/5</p>
                </div>
            </div>
            {product.discount === 0 ?
                <p className="mt-2 font-bold text-3xl">${product.price}</p> : (
                    <div className="flex items-center gap-2 py-2">
                        <p className=" font-bold text-3xl">${(product.price * (1 - product.discount / 100)).toFixed(0)}</p>
                        <p className="text-3xl line-through text-[#b7b7b7]">${product.price}</p>
                        <span className="text-2xl text-[#FF3333] bg-[#ffebeb] py-1 px-3 rounded-4xl">-{product.discount}%</span>
                    </div>
                )}
            <p className="my-4 text-lg text-gray-500 ">{product.description}</p>
        </div>
        <hr className="my-5 text-gray-300" />
        <CheckColor product={product} />
        <hr className="my-5 text-gray-300" />
        <ChooseSize product={product} />
        <hr className="my-5 text-gray-300" />
        <div>
            <div className="flex justify-between">
                <ChooseQuantity product={product} />
                <button
                    className="cursor-pointer bg-black w-full text-white md:text-2xl rounded-full ml-6"
                >Add to Cart</button>
            </div>
        </div>
    </div>)
}