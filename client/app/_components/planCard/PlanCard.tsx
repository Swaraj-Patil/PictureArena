'use client'
import React, { FC } from 'react'
import { Button } from '..'
import { useAppSelector } from '@/lib/hooks';
import { getSubscriptionType } from '@/lib/features/layout/layoutSlice';

interface RateProps {
    monthly: number;
    yearly: number
}

interface PlanCardProps {
    name: string;
    description: string;
    rates: RateProps
}

const PlanCard: FC<PlanCardProps> = ({ name, description, rates }) => {

  const subscriptionType = useAppSelector(getSubscriptionType)

  return (
    <div className='h-[425px] bg-black-10 border border-black-15 rounded-xl p-12'>
        <p className='text-xl font-bold mb-4'>{name}</p>
        <p className='text-base text-grey-60 mb-10'>{description}</p>
        <p className='font-semibold text-4xl mb-10'>{`$${subscriptionType === 'Monthly' ? rates.monthly : rates.yearly}`}<span className='text-base text-grey-60'>{subscriptionType === 'Monthly' ? '/month' : '/year'}</span></p>

        <div className='flex items-center gap-x-5'>
            <Button label='Start Free Trial' fontSize={16} type='secondary' />
            <Button label='Choose Plan' fontSize={16} />
        </div>
    </div>
  )
}

export default PlanCard