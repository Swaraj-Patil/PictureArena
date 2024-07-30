'use client'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { FC, useState } from 'react'

interface FAQProps {
    question: string;
    answer: string;
    index: number
}

const FAQ: FC<FAQProps> = ({ question, answer, index }) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <div className='flex items-start justify-between'>
        <div className='flex gap-x-5'>
            <div className='w-[62px] h-[67px] bg-black-12 border border-black-15 rounded-[10px] text-xl font-semibold flex items-center justify-center'>
                {index < 10 ? `0${index}` : index}
            </div>

            <div className='flex flex-col justify-center'>
                <p className='font-medium text-xl'>{question}</p>
                {expanded && <p className='text-base text-grey-60 mt-5 max-w-[500px]'>{answer}</p>}
            </div>

        </div>

        <div className={`cursor-pointer h-full flex items-${expanded ? 'start' : 'center'}`} onClick={() => setExpanded(prevState => !prevState)}>
            {expanded ? <MinusIcon className='w-5' /> : <PlusIcon className='w-5' />}
        </div>
    </div>
  )
}

export default FAQ