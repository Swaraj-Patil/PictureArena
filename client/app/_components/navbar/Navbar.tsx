'use client'
import React from 'react'
import logoDesktop from '@/public/media/logo-desktop.svg'
import Image from 'next/image'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import classes from './Navbar.module.css'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const authRoutes = ['/login', '/register']
    const hideNavbar = authRoutes.includes(pathname)
    return (
        
        <div className={`fixed z-50 w-full text-white flex justify-between items-center px-24 py-5 ${hideNavbar && 'hidden'}`}>
            <div className='flex items-center gap-x-2'>
                <Image
                    src={logoDesktop}
                    alt='PictureArena'
                />
            </div>

            <ul className={`${classes.navbarLinks} bg-black-06 flex gap-x-2 p-2 rounded-xl border-4 border-black-12`}>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/list'>Movies & Shows</NavLink>
                <NavLink href='/support'>Support</NavLink>
                <NavLink href='/subscriptions'>Subscriptions</NavLink>
            </ul>

            <div className='flex gap-x-7'>
                <MagnifyingGlassIcon className='w-6' />
                <BellIcon className='w-6' />
            </div>
        </div>
    )
}

export default Navbar