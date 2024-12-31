import React from 'react'
import { Button } from '..'
import Image from 'next/image'
import freeTrialImage from '@/public/media/free-trial.png'

const FreeTrial = () => {
  return (
    <div className='relative h-[268px] border border-black-15 rounded-xl overflow-hidden px-20 flex items-center'>
        <div className='absolute z-1 top-0 left-0'>
            <Image
                priority
                src={freeTrialImage}
                alt='Free Trial Banner'
            />
        </div>
        <div className='relative z-2 flex items-center justify-between w-full'>
            <div>
                <p className='font-bold text-4xl mb-4'>Start your free trial today!</p>
                <p className='text-grey-60 text-base'>This is a clear and concise call to action that encourages users to sign up for a free trial of PictureArena.</p>
            </div>
            <Button label='Start a Free Trail' fontSize={16} />
        </div>
    </div>
  )
}

export default FreeTrial