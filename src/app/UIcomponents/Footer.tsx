import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { Heart } from "lucide-react";

export function Footer() {
    const date = new Date();
    return (
        <footer className="py-6">
            <div className="flex flex-col md:flex-row p-5 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} className="size-10" alt="CalSukh Logo" width={40} height={40} />
                    <h4 className="text-3xl font-semibold">Cal<span className="text-blue-500">Sukh</span></h4>
                </Link>

                <div className="text-sm mt-3 md:mt-0">
                    &copy; {date.getFullYear()} All rights reserved
                </div>
            </div>

            <div className="flex items-center justify-center mt-4">
                <h3 className="font-medium">
                    MADE WITH <span className="inline-flex items-center text-red-500 mx-1"><Heart size={18} /></span> By Sukhi Don!
                </h3>
            </div>
        </footer>
    );
}
