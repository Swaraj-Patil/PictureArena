import React, { FC, ReactNode } from 'react'

interface ButtonProps {
    label: string;
    icon?: any;
}

const Button: FC<ButtonProps> = ({ label, icon: Icon }) => {
  return (
    <button 
        className='font-manrope font-semibold text-[18px] rounded-lg px-6 py-4 text-white bg-red-45 flex items-center gap-x-1' 
        type='button'
    >
        {Icon && <span><Icon className='w-7' /></span>}
        <span>{label}</span>
    </button>
  )
}

export default Button