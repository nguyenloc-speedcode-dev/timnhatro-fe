'use client'

import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { Tabbar } from './Tabbar'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {

    const breakpoint = useBreakpoint()

    return (
        <>
            <MainHeader />
            <main className='md:flex max-w-7xl mx-auto pt-10'>
                {children}
            </main>
            {
                breakpoint === 'mobile' &&
                <Tabbar />
            }
            <MainFooter />

        </>
    )
}

export default MainLayout