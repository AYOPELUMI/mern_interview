'use client'

import SectionHeader from '@/components/sectionHeader'
import TestimonialCard from '@/components/testimonialCard'
import React, { useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonies = [
    {
        author: "Billy Adams",
        firm: "Rolling thunder",
        img: "/images/testimonial-1.jpg",
        testimony: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non."
    },
    {
        author: "Gary Johnson",
        firm: "Locost Accessories",
        img: "/images/testimonial-2.jpg",
        testimony: "Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam."
    },
    {
        author: "Daniel Pringle",
        firm: "SageBrush",
        img: "/images/testimonial-3.jpg",
        testimony: "Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque."
    },
]

const Testimonials = () => {
    const slides = [testimonies[testimonies.length - 1], ...testimonies, testimonies[0], testimonies[1]];
    const realSlideCount = slides.length;
    const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
    const [transitioning, setTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Handle slide transitions
    const goToSlide = useCallback((newIndex: number) => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex(newIndex);
    }, [transitioning]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    // Handle touch events
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide(); // Swipe left
        } else if (touchEnd - touchStart > 50) {
            prevSlide(); // Swipe right
        }
    };

    // Handle transition end to reset position if at clone
    const handleTransitionEnd = () => {
        setTransitioning(false);

        // If we're at the first clone (index 0), jump to last real slide
        if (currentIndex === 0) {
            setTimeout(() => {
                setCurrentIndex(realSlideCount);
            }, 0);
        }
        // If we're at the last clone (index slides.length - 1), jump to first real slide
        else if (currentIndex === slides.length - 1) {
            setTimeout(() => {
                setCurrentIndex(1);
            }, 0);
        }
    };

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            if (!transitioning) {
                nextSlide();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, transitioning, nextSlide]);

    // Calculate transform styles for smooth sliding
    const getSlideStyle = (index: number) => {
        const offset = (index - currentIndex) * 100;
        return {
            transform: `translateX(${offset}%)`,
            transition: transitioning ? 'transform 500ms ease-in-out' : 'none',
        };
    };

    return (
        <section className='"px-[15px]'>
            <SectionHeader text='Testimonials' />
            <div className='w-full overflow-hidden overflow-y-auto py-10'>

                <Swiper
                    observer={true}
                    spaceBetween={40}
                    className=" !overflow-visible"
                    modules={[Pagination, Navigation]}
                    slidesPerView={2}
                    loop={true}
                >   {slides.map((testimony, index) => (
                    <SwiperSlide key={index} className="h-fit ml-4  overflow-visible">

                        <TestimonialCard key={`${testimony.author}-${index}`} img={testimony.img} author={testimony.author} testimony={testimony.testimony} firm={testimony.firm} />
                    </SwiperSlide>
                ))}

                </Swiper>
            </div>


        </section>
    )
}

export default Testimonials