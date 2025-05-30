'use client'

import SectionHeader from '@/components/sectionHeader'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    {
        img: "/images/goldengrid.png",
        title: "goldengrid"
    },
    {
        img: "/images/sweety.png",
        title: "sweety"
    },
    {
        img: "/images/Magic-Furnitures-1.png",
        title: "magic"
    },
    {
        img: "/images/lifeguard.png",
        title: "lifeguard"
    },
    {
        img: "/images/client-7.png",
        title: "less"
    },
    {
        img: "/images/designlovers.png",
        title: "designlovers"
    },
]
const Clients = () => {
    return (
        <section className='"px-[15px]'>
            <SectionHeader text='Clients' />
            <div className='w-full overflow-hidden py-4 overflow-y-auto'>

                <Swiper
                    observer={true}
                    spaceBetween={40}
                    className=" !overflow-visible"
                    modules={[Pagination, Navigation]}
                    slidesPerView={4}
                    loop={true}
                >   {images.map((image, index) => (
                    <SwiperSlide key={index} className="h-fit ml-4  overflow-visible">
                        <a className='group px-[15px] pt-2.5 pb-[15px] mb-[15px]' href='#' target='_blank' title={image.title}>
                            <img src={image.img} className='mx-auto w-full max-w-[100px] opacity-70 group-hover:opacity-0 transition-all duration-300' />
                        </a>
                    </SwiperSlide>
                ))}

                </Swiper>
            </div>
        </section>
    )
}

export default Clients