"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setIsShrunk(true);
        } else {
            setIsShrunk(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full flex items-center justify-center sticky z-[999] top-6 font-body">
        <div className={`flex justify-between w-full py-3 px-7 border hover:border-primary-light bg-white/90 backdrop-blur-lg shadow-sm duration-300 ease-in-out items-center rounded-3xl ${isShrunk ? 'w-[60vw]' : 'w-full'}`}>
            <div className="font-serif text-2xl font-bold text-black">Asteriod</div>
            
            <div className="flex border border-blue-500/20 bg-blue-500/[0.03] transition-shadow overflow-hidden hover:shadow-lg rounded-full items-center justify-center font-sans">
                <Link href={"https://docs.asteroid.ai/"} className="py-2 px-8 hover:bg-primary hover:text-white ease-in-out duration-200 transition-all">Docs</Link>
                <Link href={"https://blog.asteroid.ai/"} className="py-2 px-8 hover:bg-primary hover:text-white ease-in-out duration-200 transition-all">Blogs</Link>
                <Link href={"/#pricing"} className="py-2 px-8 hover:bg-primary hover:text-white ease-in-out duration-200 transition-all">Pricing</Link>
            </div>

            <div className="flex gap-6">
                <Link href={"https://github.com/asteroidai/asteroid-python-sdk"}>
                    <Image src="././github.svg" alt="github logo" width={25} height={25} />
                </Link>
                <Link href={"https://join.slack.com/t/asteroidcommunity/shared_invite/zt-2w0zvuqow-eIzIRLK~3vlEvN83d9qgxw"}>
                    <Image src="././slack.svg" alt="slack logo" width={25} height={25} />
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
