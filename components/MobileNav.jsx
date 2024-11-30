"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: "Home",
        path: "/",
    },  
    {
        name: "About Me",
        path: "/about",
    },  
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact me",
        path: "/contact",
    },
]


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <nav>
            <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-accent" />
                </SheetTrigger>
                <SheetTitle>
                </SheetTitle>
                <SheetContent className="flex flex-col overflow-y-auto"> 
                    <div className="mt-32 mb-10 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl front-semibold">
                                Menu<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8 py-12">
                        {links.map((link) => (
                            <Link key={link.path} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileNav;
