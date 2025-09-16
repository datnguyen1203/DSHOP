"use client"

const images = [
    { url: "/brands/versace.png" },
    { url: "/brands/zara.png" },
    { url: "/brands/gucci.png" },
    { url: "/brands/prada.png" },
    { url: "/brands/ck.png" },
];

export default function Brands() {
    return (
        <div className="flex flex-wrap justify-center md:justify-between md:px-20 bg-black py-10 gap-6">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.url}
                    className="h-[26px] md:h-[33px]"
                    alt={`brand-${index}`}
                />
            ))}
        </div>
    );
}
