'use client';

import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";

import 'swiper/css';

import 'swiper/css/bundle';
import styles from './styles.module.scss';
import {UISection} from "../../../shared/ui/section";
import {ButtonCircleTransparentGray} from "../../../shared/ui/buttons";
import {RETAILERS} from "./config";

export function MainPageRetailPark() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['retail-park']}>
            <Link href='#!' className={styles['retail-park__more']}>Подробнее</Link>
            <div className={styles['retail-park__heading']}>Ритейл-парк</div>

            <div className={styles['retail-park__slider']}>
                <div className={styles['retail-park__slider-buttons']}>
                    <div onClick={handlePrev}>
                        <ButtonCircleTransparentGray isRevers={true}/>
                    </div>
                    <div onClick={handleNext}>
                        <ButtonCircleTransparentGray isRevers={false}/>
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={14}
                    slidesPerView={2}
                    speed={1500}
                    loop
                    breakpoints={{
                        720: {
                            slidesPerView: 4,
                            spaceBetween: 14,
                        },
                        1440: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        RETAILERS.map(retailer => (
                            <SwiperSlide key={retailer.id}>
                                <Link href={retailer.href} className={styles['retail-park__slide']} target='_blank'>
                                    <div className={styles['retail-park__slide-image']}>
                                        <img src={retailer.image} alt=""/>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </UISection>
    )
}
