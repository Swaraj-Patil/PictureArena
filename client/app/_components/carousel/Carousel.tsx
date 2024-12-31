'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Typography } from '..'

interface CarouselItem {
    name: string;
    img: string | any;
}

interface CarouselProps {
    title: string;
    description?: string;
    items: CarouselItem[];
}

const Carousel: FC<CarouselProps> = ({
    title,
    description = '',
    items
}) => {

    const carouselRef = useRef<HTMLDivElement>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 5;
    const itemWidth = 268

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -itemsPerPage * itemWidth,
                behavior: 'smooth'
            })
            // setCurrentPage(prevState => prevState - 1)
        }
    }
    
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: itemsPerPage * itemWidth,
                behavior: 'smooth'
            })
            // setCurrentPage(prevState => prevState + 1)
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollLeft = carouselRef.current.scrollLeft
            const newPage = Math.floor(scrollLeft / (itemWidth * itemsPerPage)) + 1
            setCurrentPage(newPage)
        }
    }

    useEffect(() => {
        const carousel = carouselRef.current
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll)
            return () => carousel?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <div className='flex items-center justify-between mb-20'>
                <Typography title={title} description={description} />

                <div className='bg-black-06 w-64 h-[88px] rounded-xl border border-black-12 flex items-center justify-between px-4'>
                    <div 
                        className='bg-black-10 w-14 h-14 rounded-lg border border-black-12 flex justify-center items-center cursor-pointer'
                        onClick={handlePrev}
                    ><ArrowLeftIcon className='w-7' /></div>
                    <div className='flex gap-x-1'>
                        {[...Array(Math.floor(items.length / 5))].map((_, i) => <div key={i} className={`${i === currentPage - 1 ? 'bg-red-45 w-6' : 'bg-black-20 w-4'} h-1 rounded-lg`}></div>)}
                    </div>
                    <div 
                        className='bg-black-10 w-14 h-14 rounded-lg border border-black-12 flex justify-center items-center cursor-pointer'
                        onClick={handleNext}
                    ><ArrowRightIcon className='w-7' /></div>
                </div>
            </div>

            <div className='flex gap-x-8 overflow-x-scroll cursor-pointer hide-scrollbar' ref={carouselRef}>
                {items.map(({ name, img }, index) => 
                    <div key={index} className='bg-black-10 border border-black-15 rounded-xl w-60 p-6'>
                        <div className='w-48'>
                            <Image
                                priority
                                src={img}
                                alt='banner'
                            />
                        </div>

                        <div className='text-white flex items-center justify-between mt-1'>
                            <p className='font-semibold text-[18px]'>{name}</p>
                            <p><ArrowRightIcon className='w-6' /></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carousel