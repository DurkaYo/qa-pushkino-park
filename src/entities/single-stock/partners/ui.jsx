'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";

import {UISection} from "../../../shared/ui/section";
import {RentersSingleTile} from "../../renters-single-tile";

import 'swiper/css';
import 'swiper/css/bundle';
import styles from './styles.module.scss';
import {ButtonCircleTransparentWhite} from "../../../shared/ui/buttons";

export function SingleStockPartners() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['single-stock-partners']}>
            <div className={styles['single-stock-partners__heading']}>Партнеры акции</div>

            <div className={styles['single-stock-partners__slider-buttons']}>
                <div onClick={handlePrev}>
                    <ButtonCircleTransparentWhite isRevers={true}/>
                </div>
                <div onClick={handleNext}>
                    <ButtonCircleTransparentWhite isRevers={false}/>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                loop
                slidesPerView={1.4}
                spaceBetween={20}
                breakpoints={{
                    720: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 4,
                    }
                }}
            >
                {
                    [...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <RentersSingleTile/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </UISection>
    )
}
