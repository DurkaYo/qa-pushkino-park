'use client';

import Link from "next/link";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle';

import {UISection} from "../../../shared/ui/section";
import {ButtonCircleTransparentWhite} from "../../../shared/ui/buttons";

import styles from './styles.module.scss';

export function MainPageTheatre() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['theatre']}>
            <div className={styles['theatre__top-line']}>
                <div className={styles['theatre__data']}>
                    <Link href='/' className={styles['theatre__site']}>Перейти на сайт театра</Link>
                    <div className={styles['theatre__date']}>вторник, 9 января, 14:00</div>
                </div>
                <div className={styles['theatre__heading']}>Афиша театра III Р.И.М.</div>
            </div>

            <div className={styles['theatre__slider-buttons']}>
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
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['theatre__slide']}>
                        <div className={styles['theatre__slide-image']}>
                            <img src="/images/temp_dev/main-page/theatre/event.jpg" alt=""/>
                        </div>
                        <div className={styles['theatre__slide-title']}>Длинный заголовок</div>
                        <div className={styles['theatre__slide-date']}>26 января</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </UISection>
    )
}
