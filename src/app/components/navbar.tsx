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
            <div className="flex justify-center items-center space-x-10 text-xl flex-1">
                <Link href="/" className="flex-initial relative">
                    <p className="text-black hover:text-branch_color duration-500">
                        new arrivals
                    </p>
                </Link>
                <Link href="/rings" className="flex-initial">
                    <p className="text-black hover:text-branch_color duration-500">
                        rings
                    </p>
                </Link>
                <Link href="/earrings" className="flex-initial">
                    <p className="text-black hover:text-branch_color duration-500">
                        earrings
                    </p>
                </Link>
                <Link href="/necklaces" className="flex-initial">
                    <p className="text-black hover:text-branch_color duration-500">
                        necklaces
                    </p>
                </Link>
                <Link href="/bracelets" className="flex-initial">
                    <p className="text-black hover:text-branch_color duration-500">
                        bracelets
                    </p>
                </Link>
                <Link href="/contact" className="flex-initial">
                    <p className="text-black hover:text-branch_color duration-500">
                        contact us
                    </p>
                </Link>
            </div>
            <Link href="/cart" className="flex-initial justify-end items-center w-50 h-50 relative group">
                <div className="relative w-50 h-50 justify-center items-center">
                    <Image 
                    src="/cart_logo.png" 
                    alt="Shopping Cart" 
                    width={80}
                    height={80}
                    className="w-50 transition-transform duration-500 transform hover:scale-110"
                    />
                    <Image
                    src="/golden_cart_logo.png"
                    alt="Golden Shopping Cart"
                    width={80}
                    height={80}
                    className="absolute top-0 left-0 w-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </Link>
        </div>
    )
}