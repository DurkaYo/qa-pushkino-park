'use client';

import Link from "next/link";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle';

import {UISection} from "../../../shared/ui/section";
import {SliderTwoTiles} from "../../../entities/slider-two-tiles";
import {ButtonCircleTransparentWhite} from "../../../shared/ui/buttons";

import styles from './styles.module.scss';
import {CINEMA_SLIDES, CINEMA_SLIDES_LONG} from "./config";

export function MainPageCinema() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['cinema']}>
            <div className={styles['cinema__top-line']}>
                <div className={styles['cinema__data']}>
                    <Link href='#!' className={styles['cinema__site']} target='_blank'>Перейти на сайт кинотеатра</Link>
                    <div className={styles['cinema__date']}>вторник, 9 января, 14:00</div>
                </div>
                <div className={styles['cinema__heading']}>Сегодня в кино</div>
            </div>

            <div className={styles['cinema__slider']}>
                <div className={styles['cinema__slider-buttons']}>
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
                    slidesPerView={1.3}
                    speed={1500}
                    loop
                    breakpoints={{
                        720: {
                            slidesPerView: 4,
                        }
                    }}>
                    {
                        CINEMA_SLIDES.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Link href={slide.href} className={styles['cinema__slide']} target='_blank'>
                                    <div className={styles['cinema__slide-image']}>
                                        <img src={slide.image} alt=""/>
                                    </div>
                                    <div className={styles['cinema__slide-title']}>{slide.title}</div>
                                    <div className={styles['cinema__slide-subtitle']}>{slide.subtitle}</div>
                                    <div className={styles['cinema__slide-sessions']}>
                                        {
                                            slide.sessions.map((session, index) => <div
                                                className={styles['cinema__slide-session']} key={index}>{session}</div>)
                                        }
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className={styles['cinema__subheading']}>Возьмите к просмотру</div>

            <SliderTwoTiles slides={CINEMA_SLIDES_LONG}/>
        </UISection>
    )
}
