'use client'

import React from 'react'
import { AlertDialog, AlertDialogContent } from '../elements/alert-dialog'
import { MdOutlineMail } from "react-icons/md";
import { CiUser, CiLock } from "react-icons/ci";
import { useAuth } from '@/store/useAuth'
import Input from '../elements/input';

const AuthModal = () => {
    const { openForm } = useAuth()
    return (
        <AlertDialog open={openForm} >
            <AlertDialogContent className='max-w-[800px] w-full p-0'>
                <div className='relative flex overflow-hidden'>
                    <div className='w-[400px] p-[24px] flex-col '>
                        <div className='mb-[10px] '>
                            <h2 className='mb-[10px]'>Tạo tài khoản</h2>
                            <Input wrapperClass='py-[6px]'
                                label='Email'
                                icon={<MdOutlineMail className='absolute top-1/2 right-[8px] bottom-auto left-auto
                                    text-[20px] text-[#c3c3c3] translate-y-[-50%]'/>}
                            />
                            <Input wrapperClass='py-[6px]'
                                label='Tên hiển thị'
                                icon={<CiUser className='absolute top-1/2 right-[8px] bottom-auto left-auto
                                    text-[20px] text-[#c3c3c3] translate-y-[-50%]'/>}
                            />
                            <Input wrapperClass='py-[6px]'
                                type='password'

                                label='Mật khẩu'
                                icon={<CiLock className='absolute top-1/2 right-[8px] bottom-auto left-auto
                                    text-[20px] text-[#c3c3c3] translate-y-[-50%]'/>}
                            />
                            <button className='Login_Button'>
                                Tạo tài khoản
                            </button>
                            <div className='text-center'>
                                Hoặc tiếp tục với
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='w-[400px]  bg-no-repeat bg-contain bg-[50%] border-none bg-[#fdebef]' style={{
                        backgroundImage: 'url(https://toidicafe.vn/images/coffee-break.svg)'
                    }}>

                    </div>
                </div>

            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AuthModal