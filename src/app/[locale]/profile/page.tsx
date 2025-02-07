'use client'

import CoverProfile from '@/components/ui/profile/CoverProfile'
import NavigationProfile from '@/components/ui/profile/NavigationProfile'
import ProfileContainer from '@/components/ui/profile/ProfileContainer'
import React from 'react'

const Profile = () => {
    return (
        <div className='w-full pt-0'>
            <CoverProfile />
            <NavigationProfile />
            <div className='flex justify-center w-full  m-auto px-[16px]'>
                <ProfileContainer />
            </div>
        </div>
    )
}

export default Profile