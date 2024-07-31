'use client'
import { toggleSubscriptionType } from '@/lib/features/layout/layoutSlice'
import { useAppDispatch } from '@/lib/hooks'
import React, { FC, useState } from 'react'

interface ToggleButtonProps {
    items: string[]
}

const ToggleButton: FC<ToggleButtonProps> = ({ items }) => {
    const dispatch = useAppDispatch()

    const [active, setActive] = useState(items[0])

    const toggleActiveButton = (value: string) => {
        setActive(value)
        dispatch(toggleSubscriptionType(value as 'Monthly' | 'Yearly'))
    }
  return (
    <div className='h-16 bg-black-06 border border-black-15 rounded-[10px] p-[10px] flex items-center justify-center text-[14px] font-medium'>
        <p 
            className={`cursor-pointer px-5 py-3 rounded-[10px] ${active === items[0] && 'bg-black-12'}`}
            onClick={() => toggleActiveButton(items[0])}
        >{items[0]}</p>
        <p 
            className={`cursor-pointer px-6 py-3 rounded-[10px] ${active === items[1] && 'bg-black-12'}`}
            onClick={() => toggleActiveButton(items[1])}
        >{items[1]}</p>
    </div>
  )
}

export default ToggleButton