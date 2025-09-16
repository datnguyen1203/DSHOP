import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-10">
            <div className="relative md:h-[100px] h-[150px] justify-items-center items-center">
                <div className="absolute flex flex-col bg-black text-white md:w-1/2 w-[90%] rounded-3xl md:h-[180px] items-center justify-items-center text-center py-10 px-10">
                    <div className="md:flex justify-between w-full">
                        <div className="flex items-center">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-left">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                        </div>
                        <div className="md:w-1/2 flex flex-col gap-3 mt-5">
                            <div className="relative flex items-center text-center">
                                <input type="text"
                                    className="bg-white text-black placeholder:text-gray-500 pl-10 py-2 md:px-10 rounded-4xl w-full"
                                    placeholder="Enter your email address" />

                                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                            </div>
                            <button
                                className="bg-white text-black py-2 px-2 rounded-4xl"
                            >Subscribe to Newsletter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f0f0f0] flex flex-col items-center">
                <div className="bg-[#f0f0f0] md:flex gap-10 items-start justify-between md:px-70 py-20 md:mx-auto">
                    <div className="md:w-1/3 p-5 md:m-0 mt-15">
                        <h1 className="text-2xl md:text-3xl font-extrabold ">D-SHOP</h1>
                        <p className="md:text-lg text-gray-500 my-2">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="flex mt-10 gap-5">
                            <Link href={"#"} className="flex w-[30px] h-[30px] border border-gray-400 rounded-4xl items-center justify-center">
                                <FaTwitter />
                            </Link>
                            <Link href={"#"}>
                                <FaFacebook className="w-[30px] h-[30px]" />
                            </Link>
                            <Link href={"#"} className="flex w-[30px] h-[30px] border border-gray-400 rounded-4xl items-center justify-center">

                                <FaInstagram />
                            </Link>
                            <Link href={"#"} className="flex w-[30px] h-[30px] border border-gray-400 rounded-4xl items-center justify-center">

                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:flex md:flex-1">
                        <div className="md:w-1/5 p-5">
                            <h1 className="text-2xl my-2">COMPANY</h1>
                            <div className="flex flex-col md:text-lg text-gray-500 my-2 gap-3">
                                <Link href={"#"}>About</Link>
                                <Link href={"#"}>Features</Link>
                                <Link href={"#"}>Works</Link>
                                <Link href={"#"}>Career</Link>
                            </div>
                        </div>
                        <div className="md:w-1/5 p-5">
                            <h1 className="text-2xl my-2">HELP</h1>
                            <div className="flex flex-col md:text-lg text-gray-500 my-2 gap-3">
                                <Link href={"#"}>Customer Support</Link>
                                <Link href={"#"}>Delivery Details</Link>
                                <Link href={"#"}>Term & Conditions</Link>
                                <Link href={"#"}>Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="md:w-1/5 p-5">
                            <h1 className="text-2xl my-2">FAQ</h1>
                            <div className="flex flex-col md:text-lg text-gray-500 my-2 gap-3">
                                <Link href={"#"}>Account</Link>
                                <Link href={"#"}>Manage Deliveries</Link>
                                <Link href={"#"}>Orders</Link>
                                <Link href={"#"}>Payments</Link>
                            </div>
                        </div>
                        <div className="md:w-1/5 p-5">
                            <h1 className="text-2xl my-2">RESOURCES</h1>
                            <div className="flex flex-col md:text-lg text-gray-500 my-2 gap-3">
                                <Link href={"#"}>Free eBooks</Link>
                                <Link href={"#"}>Development Tutorial</Link>
                                <Link href={"#"}>How to - Blog</Link>
                                <Link href={"#"}>Youtube Playlist</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-[90%] md:w-[75%] mx-auto text-gray-400 bg-[#f0f0f0]" />
                <div className="bg-[#f0f0f0] md:flex gap-x-100 items-start justify-between md:px-70 py-10 md:mx-auto">
                    <div className="w-full md:text-start text-center">
                        <p>D-Shop. © 2000-2021, All rights reserved</p>
                    </div>
                    <div className="flex md:mx-40 md:w-full">
                        <Link href={"#"}>
                            <img src="/visa.png" alt="visa" className="h-[50px]" />
                        </Link>
                        <Link href={"#"}>
                            <img src="/bank.png" alt="bank" className="h-[50px]" />
                        </Link>
                        <Link href={"#"}>
                            <img src="/paypal.png" alt="paypal" className="h-[50px]" />
                        </Link>
                        <Link href={"#"}>
                            <img src="/applepay.png" alt="applepay" className="h-[50px]" />
                        </Link>
                        <Link href={"#"}>
                            <img src="/ggpay.png" alt="ggpay" className="h-[50px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}