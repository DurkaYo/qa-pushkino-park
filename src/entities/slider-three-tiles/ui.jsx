'use client';

import Link from "next/link";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle';

import {ButtonCircleTransparentWhite} from "../../shared/ui/buttons";

import styles from './styles.module.scss';

export function SliderThreeTiles({slides}) {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <>
            <div className={styles['slider__buttons']}>
                <div onClick={handlePrev}>
                    <ButtonCircleTransparentWhite isRevers={true}/>
                </div>
                <div onClick={handleNext}>
                    <ButtonCircleTransparentWhite isRevers={false}/>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1.2}
                speed={1500}
                loop
                breakpoints={{
                    720: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    }
                }}
            >
                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <Link href={slide.href} className={styles['slider__slide']}>
                                <div className={styles['slider__image']}>
                                    <img src={slide.image} alt=""/>
                                </div>
                                {
                                    slide.title && <div className={styles['slider__title']}>{slide.title}</div>
                                }
                                {
                                    slide.subtitle && <div className={styles['slider__date']}>{slide.subtitle}</div>
                                }
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
