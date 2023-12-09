import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {Card, CardTitle, CardDescription, CardHeader} from "./components/ui/card";
import {Image} from "lucide-react"

import  'swiper/css';
import 'swiper/swiper-bundle.css';
import React from "react";

const reviewsData = [
    {
        avatar: '@/reviews/avatar-1.png',
        name: 'Andrzej',
        job: 'Admin',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus'
    },
    {
        avatar: 'reviews/avatar-2.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    },
    {
        avatar: '/reviews/avatar-7.png',
        name: 'Tomson',
        job: 'Chef',
        descripiton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, culpa debitis dolorum ex harum hic in magni minus',
    }
]
const Reviews = () => {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className='h-[350px] swiper-no-copy'
                >
                    {reviewsData.map((person, index) => (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]' >
                                <CardHeader className='p-0 mb-10'>
                                    <div className='flex items-center gap-x-4'>
                                    <Image
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=''
                                    />
                                    <div className='flex flex-col'>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>
                                    {person.descripiton}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;