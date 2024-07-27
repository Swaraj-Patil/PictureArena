// 'use client'
import React from 'react'
import logoDesktop from '@/public/media/logo-desktop.svg'
import Image from 'next/image'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className='bg-[#00000080] text-white flex justify-between items-center px-24 py-5'>
        <div className='flex items-center gap-x-2'>
            <Image 
                src={logoDesktop} 
                alt='PictureArena' 
            />
        </div>

        <ul className={`${classes.navbarLinks} bg-black-06 flex gap-x-2 p-2 rounded-xl border-4 border-black-12`}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/list'>Movies & Shows</Link></li>
            <li><Link href='/support'>Support</Link></li>
            <li><Link href='/subscriptions'>Subscriptions</Link></li>
        </ul>

        <div className='flex gap-x-7'>
            <MagnifyingGlassIcon className='w-6' />
            <BellIcon className='w-6' />
        </div>
    </div>
  )
}

export default Navbar