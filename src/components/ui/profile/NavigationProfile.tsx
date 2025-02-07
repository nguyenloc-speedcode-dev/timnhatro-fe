import Link from 'next/link'
import React from 'react'

import { FaRss } from "react-icons/fa";

const NavigationProfile = () => {
    return (
        <div className='bg-[#fff] shadow-header-custom-1 sticky t-[-1px] 
        whitespace-nowrap overflow-x-auto'>
            <div className='w-full md:w-[1060px] border-t m-auto flex justify-between'>
                <ul className='profile-navigation'>
                    <li>
                        <Link href={"#"} className='block font-medium px-[14px] py-[10px]'>
                            Đăng tin
                        </Link>

                    </li>
                    <li>
                        <Link href={"#"} className='block font-medium px-[14px] py-[10px]'>
                            Đã lưu
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className='block font-medium px-[14px] py-[10px]'>
                            Người theo dõi
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className='block font-medium px-[14px] py-[10px]'>
                            Đã theo dõi
                        </Link>
                    </li>
                </ul>
                <ul className='profile-navigation'>
                    <li>
                        <button className='cursor-pointer flex gap-1 items-center justify-center
                        
                        '>
                            <FaRss />
                            Theo dõi
                        </button>

                    </li>
                    <li>
                        <button className='cursor-pointer flex gap-1 items-center justify-center
                        
                        '>
                            fb
                        </button>
                    </li>
                    <li>
                        <button className='cursor-pointer flex gap-1 items-center justify-center
                        
                        '>
                            zl
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default NavigationProfile