"use client"
export default function Banner() {
    return (
        <div className="relative w-full min-h-screen md:h-screen bg-[#f2f0f1]">
            <div className="md:absolute md:top-1/3 md:left-1/3 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                <div className="relative top-5">
                    <h1 className="ml-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">FIND CLOTHES</h1>
                    <h1 className="ml-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">THAT MATCHES</h1>
                    <h1 className="ml-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">YOUR STYLE</h1>
                    <p className="ml-5 mt-5 md:w-10/17 w-10/12 md:text-md lg:text-lg text-gray-500 tracking-tight">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="ml-2 md:ml-0 mt-15 bg-black text-white md:px-15 w-[95%] md:w-auto py-4 rounded-4xl">Shop Now</button>
                </div>
                <div className="md:not-first:flex mt-15 gap-1 md:text-left text-center">
                    <div className="md:flex grid grid-cols-2 ">
                        <div className="p-3 md:p-7 border-0 border-r-2 border-gray-300">
                            <h1 className="text-3xl md:text-4xl font-bold">200+</h1>
                            <p className="text-lg md:text-xl text-gray-500">International Brands</p>
                        </div>
                        <div className="p-3 md:p-7 md:border-0 md:border-r-2 border-gray-300">
                            <h1 className="text-3xl md:text-4xl font-bold">2,000+</h1>
                            <p className="text-lg md:text-xl text-gray-500">High-Quality Products</p>
                        </div>
                    </div>
                    <div className="p-3 md:p-7">
                        <h1 className="text-3xl md:text-4xl font-bold">30,000+</h1>
                        <p className="text-lg md:text-xl text-gray-500">Happy Customers</p>
                    </div>
                </div>
            </div>
            <img src="/banner1.png" className="md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full md:object-cover" />
        </div>
    )
}