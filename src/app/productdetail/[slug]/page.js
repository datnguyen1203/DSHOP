import { products, reviews } from "@/lib/data"
import ChoosePicture from "./choosePicture";
import Reviews from "./ReviewComponent";
import DetailInformation from "./DetailInformation";
import SameCategory from "./SameCategory";

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.id
    }))
}

export default function Page({ params }) {
    const product = products.find(p => p.id === params.slug)


    return (
        <div className="md:w-[90%] mx-auto">
            <hr className=" text-gray-300" />
            <div className="md:flex flex-row md:my-10 my-5">
                <ChoosePicture product={product} />
                <DetailInformation product={product} />
            </div>
            <hr className="md:w-full w-[90%] mx-auto my-5 text-gray-300" />
            <Reviews reviews={reviews} />
            <SameCategory category={product.category} />
        </div>
    )

}