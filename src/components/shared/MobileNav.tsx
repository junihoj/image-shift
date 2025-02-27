"use client"
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image
                    src="/assets/images/logo-text.svg"
                    alt='logo'
                    width={180}
                    height={28}
                />
            </Link>

            <nav className='flex gap-2'>
                {/* TODO: wrapped in signin */}
                <UserButton />
                {/* end wrap */}
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className='cursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                            <Image
                                src="/assets/images/logo-text.svg"
                                alt='logo'
                                width={152}
                                height={23}
                            />
                            <ul className='header-nav_elements'>
                                {navLinks.slice(0, 6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li
                                            key={link.route}
                                            className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                        >
                                            <Link className='sidebar-link' href={link.route}>
                                                <Image
                                                    src={link.icon}
                                                    alt="logo"
                                                    width={24}
                                                    height={24}
                                                    className={`${isActive && 'brightness-200'}`}
                                                />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>

            </nav>
        </header>
    )
}

export default MobileNav