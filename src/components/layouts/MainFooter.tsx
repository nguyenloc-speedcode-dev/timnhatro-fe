import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const MainFooter = () => {
    return (
        <footer className='hidden sm:block border-t bg-[#282828]
        bg-repeat
        '
            style={{
                backgroundImage: "url(https://ik.imagekit.io/reviewcafe/bg-dark_XOhLpLNAe0S.jpg)"
            }}
        >
            <div className='relative text-[#fff] min-h-[200px]'>
                <div className='relative  border-b-[2px] md:max-w-[1200px] w-full m-auto'
                    style={{
                        padding: "30px 20px 20px"
                    }}>
                    <div className='grid grid-cols-3'>
                        <div>
                            <div>logo</div>
                            <div className='flex max-w-[230px] mt-[20px] justify-center items-center
                            p-3 border-[2px] rounded-[6px] '>
                                <a href='#'>
                                    Hợp tác với chúng tôi
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-[16px] font-[700] uppercase mb-3'>Về chúng tôi</h4>
                            <div>
                                <Link href={"#"} className=''>Giới thiệu</Link>
                            </div>
                            <div>
                                <Link href={"#"} className=''>Giải đáp thắc mắc</Link>
                            </div>
                            <div>
                                <Link href={"#"} className=''>Liên hệ - góp ý</Link>
                            </div>
                            <div>
                                <Link href={"#"} className=''>Điều khoản sử dụng</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-[16px] font-[700] uppercase mb-3'>Theo dõi chúng tôi trên</h4>
                            <div className='flex gap-2 items-center'>
                                <FaFacebookF />
                                <Link href={"#"} className=''>
                                    Facebook
                                </Link>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaTiktok />
                                <Link href={"#"} className=''>
                                    Tiktok
                                </Link>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaInstagram />
                                <Link href={"#"} className=''>
                                    Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter