import React, { FC, ReactElement } from 'react'
import classes from './AuthLayout.module.css'
import TV from './TV'

interface AuthLayoutProps {
  children: ReactElement
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={`relative`}>
      <div className={`${classes.authBackground} h-screen`} />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-[900px] h-[85%] rounded-3xl shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.06)_0px_1px_2px_0px]'>
        <TV children={children} />
        {/* <div className='w-full'>
                {children}
            </div> */}
      </div>
      {/* <div className='bg-[#0b071933] h-full fixed top-0 left-0'/> */}
    </div>
  )
}

export default AuthLayout