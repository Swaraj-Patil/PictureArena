import Link from 'next/link'
import React from 'react'
import facebookIcon from '@/public/media/facebook.svg'
import TwitterIcon from '@/public/media/twitter.svg'
import linkedinIcon from '@/public/media/linkedin.svg'
import Image from 'next/image'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className='bg-black-06 text-white pt-24 px-40'>
            <div className={`${classes.footerLinks} flex gap-x-8 mb-24`}>
                <div>
                    <p>Home</p>
                    <ul>
                        <li><Link href=''>Categories</Link></li>
                        <li><Link href=''>Devices</Link></li>
                        <li><Link href=''>Pricing</Link></li>
                        <li><Link href=''>FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Movies</p>
                    <ul>
                        <li><Link href=''>Genres</Link></li>
                        <li><Link href=''>Trending</Link></li>
                        <li><Link href=''>New Release</Link></li>
                        <li><Link href=''>Popular</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Shows</p>
                    <ul>
                        <li><Link href=''>Genres</Link></li>
                        <li><Link href=''>Trending</Link></li>
                        <li><Link href=''>New Release</Link></li>
                        <li><Link href=''>Popular</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Support</p>
                    <ul>
                        <li><Link href=''>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Subscription</p>
                    <ul>
                        <li><Link href=''>Plans</Link></li>
                        <li><Link href=''>Features</Link></li>
                    </ul>
                </div>

                <div>
                    <p>Connect With Us</p>
                    <ul className='flex gap-x-[14px]'>
                        <li>
                            <a href="">
                                <Image
                                    src={facebookIcon}
                                    alt='facebook'
                                />

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Image
                                    src={TwitterIcon}
                                    alt='twitter'
                                />

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Image
                                    src={linkedinIcon}
                                    alt='linkedin'
                                />

                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center justify-between pt-6 pb-12 border-t border-black-15 text-grey-60'>
                <p>@2024 PictureArena, All Rights Reserved</p>

                <ul className='flex'>
                    <li className='border-r px-5 border-black-15'><Link href=''>Terms of Use</Link></li>
                    <li className='border-r px-5 border-black-15'><Link href=''>Privacy Policy</Link></li>
                    <li className='pl-5'><Link href=''>Cookie Policy</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer