import PostCard from '@/components/ui/PostCard'
import Sidebar from '@/components/ui/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            {/* sidebar */}
            <Sidebar />

            {/* new feed */}
            <section className='w-full md:w-2/3 px-2 md:px-4'>
                <div className="pt-2 md:pt-0" id="post-list">
                    <PostCard />
                </div>
            </section>

            {/* right sidebar */}
            <aside className='w-1/4 px-4 hidden md:block'>
                right sidebar
            </aside>
        </>
    )
}

export default page