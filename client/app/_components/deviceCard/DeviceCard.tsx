import React, { FC } from 'react'
import './DeviceCard.css'
import Image from 'next/image';

interface DeviceCardProps {
    icon: any;
    name: string;
    description: string;
}

const DeviceCard: FC<DeviceCardProps> = ({ icon, name, description }) => {
    return (
        <div className='font-manrope w-[434px] border border-black-15 rounded-xl p-10'>
            <div className='flex items-center gap-x-4'>
                <div className='w-[72px] h-[72px] rounded-xl flex justify-center items-center bg-black-08 border border-black-12'>
                    <Image
                        priority
                        src={icon}
                        alt={name}
                    />
                </div>

                <p className='font-semibold text-2xl'>{name}</p>
            </div>
            <p className='mt-6 text-[16x] text-grey-60'>{description}</p>
        </div>
    )
}

export default DeviceCard