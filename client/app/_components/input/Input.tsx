'use client'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import React, { ChangeEvent, FC, useState } from 'react'

interface InputProps {
    type?: 'text' | 'email' | 'password';
    label: string;
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type = 'text', label, placeholder, value, onChange }) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div className='relative border border-[#CBCAD7] rounded-[6px] px-5 py-3 text-[14px]'>
            <label className='absolute bottom-full pb-2 left-0 text-[#9794AA] text-xs' htmlFor={label}>{label}</label>
            <input
                className='text-[#686677] font-semibold'
                type={type === 'password' && passwordVisible ? 'text' : type}
                value={value}
                onChange={onChange}
                id={label}
                name={label}
                placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
                autoComplete='off'
            />
            {
                type === 'password' &&
                <div className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-[#686677]' onClick={() => setPasswordVisible(prevState => !prevState)}>
                    {passwordVisible ? <EyeIcon className='w-5' /> : <EyeSlashIcon className='w-5' />}
                </div>
            }
        </div>
    )
}

export default Input