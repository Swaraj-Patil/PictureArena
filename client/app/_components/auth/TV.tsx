'use client'
import React, { FC, ReactNode, useState } from 'react';
import classes from './AuthLayout.module.css'
import googleIcon from '@/public/media/google-icon.svg'
import Image from 'next/image';
import Input from '../input/Input';
import logo from '@/public/media/logo-wiithout-text.svg'
import Button from '../button/Button';
import facebookIcon from '@/public/media/facebook-grey.svg'
import instagramIcon from '@/public/media/instagram-grey.svg'
import linkedinIcon from '@/public/media/linkedin-grey.svg'
import twitterIcon from '@/public/media/twitter-grey.svg'
import { useAppDispatch } from '@/lib/hooks';
import { registerNewUser } from '@/lib/features/user/userSlice';

interface TVProps {
  children: ReactNode;
}

const TV: FC<TVProps> = ({ children }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()

  const handleSubmit = async () => {
    console.log(name)
    console.log(email)
    console.log(password)
    try {
      await dispatch(registerNewUser({ name, email, password })).unwrap()
    } catch (error) {
      console.log('Failed to register:', error)
    }
  }
  
  return (
    <div className={`${classes.registerBackground} rounded-md overflow-hidden h-full`}>
      <div className='bg-white ml-auto rounded-l-[40px] w-1/2 h-full flex flex-col items-center px-16 py-10'>
        <Image
          src={logo}
          alt='LOGO'
          width={40}
        />
        <p className='font-bold text-xl my-2'>Create an account</p>
        <button className='flex items-center justify-center gap-x-4 rounded-[10px] py-3 border border-[#CBCAD7] text-[#19181F] text-xs font-semibold w-full'>
          <span>Create account with Google</span>
          <span>
            <Image
              src={googleIcon}
              alt='Google'
              width={20}
            />
          </span>
        </button>
        <div className='flex items-center gap-x-5 my-4'>
          <div className='w-[160px] h-[1px] bg-[#CBCAD7]'></div>
          <p className='text-[#686677]'>Or</p>
          <div className='w-[160px] h-[1px] bg-[#CBCAD7]'></div>
        </div>

        <form className='mt-4 w-full' autoComplete='off'>
          <div className='mb-10'>
            <Input
              label='Full Name'
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className='mb-10'>

            <Input
              label='Email Address'
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className='mb-4'>
            <Input
              label='Password'
              type="password"
              placeholder='Create your password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <Button
            label='Submit'
            fullWidth
            onClick={handleSubmit}
            className='!py-3'
          />
        </form>

        <p className='my-4 text-sm'>Already have an account? <span className='text-[#6938EF] underline font-semibold'>Login</span></p>

        <div className='flex gap-x-3'>
          <Image
            src={facebookIcon}
            alt='Facebook'
            width={18}
            className='cursor-pointer'
            />
          <Image
            src={twitterIcon}
            alt='Twitter'
            width={18}
            className='cursor-pointer'
            />
          <Image
            src={instagramIcon}
            alt='Instagram'
            width={18}
            className='cursor-pointer'
            />
          <Image
            src={linkedinIcon}
            alt='Linkedin'
            width={18}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default TV;
