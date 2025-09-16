"use client"
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Shop");
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex bg-black items-center justify-center py-1">
                <p className="text-white text-xs md:text-lg">Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link></p>
            </div>
            <nav className="flex justify-between md:px-20 py-5 items-center">
                <button
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className="md:hidden w-[30px] ml-5">
                    <img src="/menu.png" alt="menu" />
                </button>
                <div className="flex gap-8 mx-5 md:mx-20 items-center">
                    <Link href="#" className="text-2xl md:text-4xl font-extrabold">D-SHOP</Link>
                    <div className="hidden md:flex gap-6 mx-10 text-xl items-center p-3 relative">
                        <Link href="#">Shop</Link>
                        <Link href="#">On Sale</Link>
                        <Link href="#">New Arrivals</Link>
                        <Link href="#">Brands</Link>
                    </div>
                </div>
                <div className="mx:hidden flex-grow max-w-2xl hidden md:block mr-20">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 pl-10 rounded-full bg-gray-100"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex gap-4 mr-10 items-center justify-center">
                    <Search

                        onClick={() => setIsOpenSearch(!isOpenSearch)}
                        className="md:hidden cursor-pointer hover:text-gray-900 transition-colors" size={30} />
                    <ShoppingBag className=" cursor-pointer hover:text-gray-900 transition-colors" size={30} />
                    <User className=" cursor-pointer hover:text-gray-900 transition-colors" size={30} />
                </div>
            </nav>

            {/* Menu on moblie */}
            {isOpenMenu && (
                <div className="absolute z-1000 w-screen md:hidden flex flex-col bg-white gap-4 p-4 border-t">
                    <Link href="#" className="">Shop</Link>
                    <Link href="#">On Sale</Link>
                    <Link href="#">New Arrivals</Link>
                    <Link href="#">Brands</Link>
                </div>
            )}

            {/* search on moblie */}
            {isOpenSearch && (
                <div className="absolute z-900 w-screen">
                    <div className="md:hiden p-3 border-t relative bg-white">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 pl-10 rounded-full bg-gray-100"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
            )}
        </div>

    )
}