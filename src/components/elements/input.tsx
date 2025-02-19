'use client'

import clsx from 'clsx';
import React, { ComponentProps, InputHTMLAttributes, ReactNode } from 'react'

type I_Input = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    wrapperClass?: ComponentProps<"div">["className"];
    icon?: ReactNode
};

const Input: React.FC<I_Input> = ({ label, wrapperClass, className, icon, ...props }) => {
    return (
        <div className={wrapperClass}>
            {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
            <div className='relative'>
                <input
                    className={clsx(`w-full text-[16px] outline-none bg-[#fff] rounded-[4px]
                     border border-[#717171]`, {
                        className
                    })}
                    {...props}
                    style={{
                        padding: "6px 30px 6px 10px"
                    }}
                />
                {icon && icon}
            </div>
        </div>
    )
}

export default Input;
