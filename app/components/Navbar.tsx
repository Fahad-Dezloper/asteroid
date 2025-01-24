import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between w-full py-3 px-7 border z-[50] hover:border-primary-light bg-white/10 backdrop-blur-lg shadow-sm duration-150 ease-in-out items-center rounded-full sticky top-6">
            <div className="font-serif text-2xl font-bold text-white">Asteriod</div>
            
            <div className="flex gap-12 border py-2 px-8 rounded-full items-center justify-center font-sans">
                <Link href={"https://docs.asteroid.ai/"} className="">Docs</Link>
                <Link href={"https://blog.asteroid.ai/"}>Blogs</Link>
                <Link href={"/#pricing"}>Pricing</Link>
            </div>

            <div className="flex gap-6">
                <Link href={"https://github.com/asteroidai/asteroid-python-sdk"}>
                    <Image src="././github.svg" alt="github logo" width={25} height={25} />
                </Link>
                <Link href={"https://join.slack.com/t/asteroidcommunity/shared_invite/zt-2w0zvuqow-eIzIRLK~3vlEvN83d9qgxw"}>
                    <Image src="././slack.svg" alt="github logo" width={25} height={25} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;