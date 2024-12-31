'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react'

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li className={isActive ? 'bg-black-10' : ''}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

export default NavLink