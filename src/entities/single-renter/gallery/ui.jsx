'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {useRef, useState} from "react";
import {Thumbs} from 'swiper/modules';

import {UISection} from "../../../shared/ui/section";
import {SvgIcon} from "../../../shared/ui/svg-icon";

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/thumbs';

import styles from './styles.module.scss';
import {
    ButtonCircleTransparentGray,
    ButtonCircleFull
} from "../../../shared/ui/buttons";

export function SingleRenterGallery() {
    const swiperRef = useRef(null);

    const [isShowGalleryOpen, setIsShowGalleryOpen] = useState(false);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    function handleToggleShowGalleryOpen(action) {
        if (action === 'open') {
            setIsShowGalleryOpen(true);
            document.body.classList.add('body-hidden');
        } else if (action === 'close') {
            setIsShowGalleryOpen(false);
            document.body.classList.remove('body-hidden');
        }
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
                    onClick={() => handleToggleShowGalleryOpen('open')}
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

            <div className={`
                ${styles['renter-show-gallery']}
                ${isShowGalleryOpen ? styles['renter-show-gallery_active'] : ''}
            `}>
                <div
                    className={styles['renter-show-gallery__close-btn']}
                    onClick={() => handleToggleShowGalleryOpen('close')}
                >
                    <SvgIcon id='close' color='#fff' />
                </div>
                <SingleRenterShowGallery />
            </div>
        </>
    )
}

function SingleRenterShowGallery() {
    const swiperBigRef = useRef();
    const swiperSmallRef = useRef();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function handlePrev() {
        (swiperBigRef.current && swiperBigRef.current.swiper) && swiperBigRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperBigRef.current && swiperBigRef.current.swiper) && swiperBigRef.current.swiper.slideNext();
    }

    return (
        <>
            <style>{`
                .swiper-slide-thumb-active:before {
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
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[Thumbs]}
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
                    onSwiper={setThumbsSwiper}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
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
