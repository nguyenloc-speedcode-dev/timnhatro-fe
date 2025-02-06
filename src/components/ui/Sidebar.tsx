'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/elements/accordion"


const Sidebar = () => {
    return (
        <aside className='w-full md:w-1/4 px-3'>
            <div className='relative cursor-pointer w-full h-[152px] mb-[20px] rounded-20 bg-[url(https://static.tacdn.com/img2/maps/img_map.png)] bg-cover
            // flex justify-center items-center'>
                <button className='h-[40px] py-1 px-2 bg-[#fff] border-[2px] border-[#000]
                rounded-20 text-[16px] font-semibold'>Xem bản đồ</button>
            </div>
            <Accordion type="multiple" className="w-full" defaultValue={
                ['location', 'room_type', "price", "rental_type"]}>
                <AccordionItem value="location">
                    <AccordionTrigger>Thành phố Hồ Chí Minh</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="room_type">
                    <AccordionTrigger>Loại phòng</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price">
                    <AccordionTrigger>Giá tiền</AccordionTrigger>
                    <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="rental_type">
                    <AccordionTrigger>Loại hình cho thuê</AccordionTrigger>
                    <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    )
}

export default Sidebar