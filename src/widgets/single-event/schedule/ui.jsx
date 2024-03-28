'use client';

import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {UISection} from "../../../shared/ui/section";

import 'swiper/css';
import 'swiper/css/bundle';

import styles from './styles.module.scss';
import {ButtonCircleTransparentGray} from "../../../shared/ui/buttons";

export function SingleEventSchedule() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['event-schedule']}>
            <div className={styles['event-schedule__heading']}>Расписание мероприятиЯ</div>

            <div className={styles['event-schedule__slider-buttons']}>
                <div onClick={handlePrev}>
                    <ButtonCircleTransparentGray isRevers={true}/>
                </div>
                <div onClick={handleNext}>
                    <ButtonCircleTransparentGray isRevers={false}/>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                loop
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    720: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    [...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles['event-schedule__item']}>
                                <div className={styles['event-schedule__item-heading']}>2 января</div>
                                <div className={styles['event-schedule__item-time']}>12:00</div>
                                <div className={styles['event-schedule__item-description']}>Кулинарный мастер-класс
                                    «Вкусный
                                    бургер» 750 руб.
                                </div>
                                <div className={styles['event-schedule__item-time']}>12:00</div>
                                <div className={styles['event-schedule__item-description']}>Кулинарный мастер-класс
                                    «Вкусный
                                    бургер» 750 руб.
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </UISection>
    )
}
