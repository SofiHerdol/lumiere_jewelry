import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

    return (
        <div className="flex justify-between px-4 py-2 font-bold border-b-2 border-black">
            <Link href="/" className="flex-initial w-400">
                <Image 
                src="/lumiere_logo.png" 
                alt="Lumiere Main Logo" 
                width={400}
                height={50}
                className="hidden md:block"
                />
            </Link>
            <div className="flex justify-center items-center space-x-10 text-2xl flex-1">
                <Link href="/" className="flex-initial relative">
                    <span className="group inline-block">
                        H O M E
                        <span className="absolute top-0 left-0 w-full h-full bg-branch_color bg-opacity-25 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </span>
                </Link>
                
                <Link href="/rings" className="flex-initial">
                    R I N G S
                </Link>
                <Link href="/earrings" className="flex-initial">
                    E A R R I N G S
                </Link>
                <Link href="/necklaces" className="flex-initial">
                    N E C K L A C E S
                </Link>
                <Link href="/bracelets" className="flex-initial">
                    B R A C E L E T S
                </Link>
                <Link href="/contact" className="flex-initial">
                    C O N T A C T
                </Link>
            </div>
            <Link href="/cart" className="flex-initial justify-end items-center w-50">
                <Image 
                src="/cart_logo.png" 
                alt="" 
                width={80}
                height={80}
                className="hidden md:block"
                />
            </Link>

        </div>
    )
}