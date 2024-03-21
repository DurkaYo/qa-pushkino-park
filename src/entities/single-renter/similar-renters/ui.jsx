'use client';

import Link from "next/link";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {UISection} from "../../../shared/ui/section";
import {ButtonCircleTransparentGray} from "../../../shared/ui/buttons";
import {RentersSingleTile} from "../../renters-single-tile";

import styles from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/bundle';

export function SingleRenterSimilarRenters() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['similar-renters']}>
            <div className={styles['similar-renters__heading']}>Похожие магазины</div>

            <div className={styles['similar-renters__slider-buttons']}>
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
                slidesPerView={1.5}
                spaceBetween={20}
                breakpoints={{
                    720: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
                <SwiperSlide>
                    <RentersSingleTile />
                </SwiperSlide>
            </Swiper>
        </UISection>
    )
}
