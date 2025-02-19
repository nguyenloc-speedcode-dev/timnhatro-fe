'use client'

import Link from 'next/link'
import React from 'react'

import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { useAuth } from '@/store/useAuth';

const MainHeader = () => {

    const { toggleOpenModalAuth, openForm } = useAuth()
    return (
        <header className='relative w-full z-10 shadow-header-custom-1'>
            <div className='flex items-center justify-between h-[60px] w-full
            px-[40px] py-0 m-auto
            '>
                <div className='sm:w-[120px] text-left '>
                    logo
                </div>
                <div className='flex justify-between items-center flex-1'>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center sm:w-[300px] h-[40px]
                        bg-f0f2f5 px-[8px] relative rounded-20 flex-col
                        '>
                            <div className='flex items-center justify-between w-full h-[30px] px-[6px]
                            cursor-pointer'>
                                <AiOutlineSearch className='text-[16px] text-606770' />
                                <input className='flex-1 text-[16px] text-606770 h-[28px] ml-[6px] outline-none border-none
                                bg-transparent relative
                                '
                                    placeholder='Nhập từ khoá tìm kiếm'
                                />
                            </div>
                        </div>
                        <div className='flex xl:hidden w-[40px] h-[40px] bg-f0f2f5 rounded-full
                         justify-center items-center ml-2 cursor-pointer'>
                            <CgMenuGridO className='text-e03 text-[24px]' />
                        </div>
                        <div className=' gap-3 items-center ml-2 hidden xl:flex'>
                            <Link href={"#"} className='text-[18px] font-semibold text-[#000] px-[10px]
                            '>
                                Trang chủ
                            </Link>
                            <Link href={"#"} className='text-[18px] font-semibold text-[#000] px-[10px]
                            '>
                                Tin đăng cho thuê
                            </Link>
                        </div>
                    </div>

                    <div className='flex gap-1 items-center justify-center'>
                        <div className='cursor-pointer'>
                            <Link href={""} className='btn-custom-1 gap-1 bg-e03 text-[#fff]
                                '>
                                <FaPencilAlt className='text-[16px]' />
                                Đăng tin
                            </Link>
                        </div>
                        <div className='cursor-pointer'>
                            <button className='btn-custom-1 border border-e03 text-e03
                            hover:bg-e03 hover:text-[#fff]
                                '
                                onClick={() => toggleOpenModalAuth(!openForm)}
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader