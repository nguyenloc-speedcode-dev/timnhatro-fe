import React from 'react'

const CoverProfile = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className="relative  w-full m-auto pb-[100px] px-[16px] ">
                <div className='flex justify-center items-center relative w-full h-[250px] px-[40px]
py-[20px] rounded-20 bg-linear-gradient-1'>
                    <div className='flex items-center justify-center absolute 
                        top-[34%] flex-col'>
                        <div className='relative w-[200px] h-[200px] p-2 rounded-full
                            g-[#fff]'>
                            <div style={{
                                backgroundImage: "url(https://toidicafe.vn/static/images/user/622d8a7b5beae850b31efe4f.svg)"
                            }} className='bg-[50%] bg-cover bg-no-repeat bg-[#fff] w-full h-full 
                                rounded-full'>

                            </div>

                        </div>
                        <h1 className=' flex items-center justify-center text-[32px] font-[700] '>Name Test
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[30px] ml-1 text-e03">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>


                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverProfile