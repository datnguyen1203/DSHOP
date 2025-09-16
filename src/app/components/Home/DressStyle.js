export default function DressStyle() {
    return (
        <div className="my-20">
            <div className="bg-[#F0F0F0] mx-5 md:mx-75 rounded-2xl p-5">
                <h1 className="text-2xl md:text-3xl font-extrabold text-center my-10">BROWSE BY DRESS STYLE</h1>
                <div className="flex flex-wrap justify-center gap-6 md:py-10">
                    <img src="/casual.png" className="w-[310px] h-[150px] md:w-[407px] md:h-[289px]" />
                    <img src="/formal.png" className="w-[310px] h-[150px] md:w-[684px] md:h-[289px]" />
                    <img src="/party.png" className="w-[310px] h-[150px] md:w-[684px] md:h-[289px]" />
                    <img src="/gym.png" className="w-[310px] h-[150px] md:w-[407px] md:h-[289px]" />
                </div>
            </div>
        </div>
    )
}