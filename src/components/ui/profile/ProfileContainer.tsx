import React from 'react'
import PostCard from '../PostCard'

const ProfileContainer = () => {
    return (
        <>
            <div className='w-full md:w-[320px] h-full mt-[20px] '>
                <div className='profile_card'>
                    1
                </div>
            </div>
            <div className='max-w-[720px] grow'>
                <div style={{
                    padding: '20px 0 0 20px'
                }}>
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </>
    )
}

export default ProfileContainer