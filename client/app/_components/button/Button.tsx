import React, { FC, ReactNode } from 'react'

interface ButtonProps {
    label: string;
    icon?: any;
    fontSize?: number;
    type?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ label, icon: Icon, fontSize = 18, type = 'primary' }) => {
  return (
    <button 
        className={`text-[${fontSize}px] font-manrope font-semibold rounded-lg px-6 py-4 text-white flex items-center gap-x-1 ${type === 'primary' ? 'bg-red-45' : 'bg-black-08 border border-black-15'}`}
        type='button'
    >
        {Icon && <span><Icon className='w-7' /></span>}
        <span>{label}</span>
    </button>
  )
}

export default Button