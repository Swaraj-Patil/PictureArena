import React, { FC, ReactNode } from 'react'

interface ButtonProps {
    label: string;
    icon?: any;
    fontSize?: number;
    type?: 'primary' | 'secondary';
    fullWidth?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button: FC<ButtonProps> = ({ label, icon: Icon, fontSize = 18, type = 'primary', fullWidth = false, onClick, className }) => {
  return (
    <button 
        className={`${fullWidth && 'w-full'} text-[${fontSize}px] font-manrope font-semibold rounded-lg px-6 py-4 text-white flex items-center justify-center gap-x-1 prevent-select ${type === 'primary' ? 'bg-red-45' : 'bg-black-08 border border-black-15'} ${className}`}
        type='button'
        onClick={onClick}
    >
        {Icon && <span><Icon className='w-7' /></span>}
        <span>{label}</span>
    </button>
  )
}

export default Button