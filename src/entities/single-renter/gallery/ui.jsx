'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";

import {UISection} from "../../../shared/ui/section";

import 'swiper/css';
import 'swiper/css/bundle';

import styles from './styles.module.scss';
import {
    ButtonCircleTransparentGray,
    ButtonCircleFull
} from "../../../shared/ui/buttons";

export function SingleRenterGallery() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <>
            <UISection defaultClass={styles['renter-gallery']}>
                <div className={styles['renter-gallery__heading']}>Галерея</div>

                <div className={styles['renter-gallery__slider-buttons']}>
                    <div onClick={handlePrev}>
                        <ButtonCircleTransparentGray isRevers={true}/>
                    </div>
                    <div onClick={handleNext}>
                        <ButtonCircleTransparentGray isRevers={false}/>
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    breakpoints={{
                        720: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: "auto",
                            slidesPerGroup: 3,
                            speed: 2500,
                        },
                    }}
                    speed={1500}
                    loop
                >
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_first']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_second']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_third']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_first']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_second']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_third']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_first']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_second']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`
                            ${styles['renter-gallery__slide']}
                            ${styles['renter-gallery__slide_third']}
                        `}
                    >
                        <div className={styles['renter-gallery__slide-img-wrapper']}>
                            <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </UISection>

            <div className={styles['renter-show-gallery']}>
                <SingleRenterShowGallery />
            </div>
        </>
    )
}

function SingleRenterShowGallery() {
    const swiperBigRef = useRef();
    const swiperSmallRef = useRef();

    function handlePrev() {
        (swiperBigRef.current && swiperBigRef.current.swiper) && swiperBigRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperBigRef.current && swiperBigRef.current.swiper) && swiperBigRef.current.swiper.slideNext();
    }

    return (
        <>
            <style>{`
                .swiper-slide-active:before {
                    content: none;
                }
            `}</style>

            <div className={styles['renter-show-gallery__sliders']}>

                <div className={`
                    ${styles['renter-gallery__slider-buttons']}
                    ${styles['renter-show-gallery__slider-buttons']}
                `}>
                    <div onClick={handlePrev}>
                        <ButtonCircleFull isRevers={true}/>
                    </div>
                    <div onClick={handleNext}>
                        <ButtonCircleFull isRevers={false}/>
                    </div>
                </div>

                <Swiper
                    ref={swiperBigRef}
                    slidesPerView={1}
                    className={styles['renter-show-gallery__slider-big']}
                    loop
                >
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-big']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    ref={swiperSmallRef}
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        720: {
                            slidesPerView: 4,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                    }}
                    loop
                    className={styles['renter-show-gallery__slider-small']}
                >
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/gallery.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className={styles['renter-show-gallery__slide-small']}>
                        <img src="/images/temp_dev/single-renter/stock.jpg" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
