'use client';

import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import {MainPageBannerTwoOvalPictures} from "../../../entities/main-page-banners/two-oval-pictures";
import {MainPageBannerOneSquarePicture} from "../../../entities/main-page-banners/one-square-picture";
import {MainPageBannerTwoRoundPictures} from "../../../entities/main-page-banners/two-round-pictures";
import {MainPageBannerTheatreThirdRim} from "../../../entities/main-page-banners/theatre-third-rim";
import {MainPageBannerCustom} from "../../../entities/main-page-banners/custom-banner";

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

export function MainPageBanners() {
    const swiperRef = useRef(null);

    return (
        <>
            <style>{`
                .swiper-pagination-bullets {
                    
                }
                
                .main-banner-slider .swiper-pagination {
                    bottom: 10.8rem;
                }
                
                @media screen and (max-width: 720px) {
                    .main-banner-slider .swiper-pagination {
                        bottom: 4rem;
                    }
                }
                
                .swiper-pagination-bullet {
                    border: 1px solid var(--color-white);
                    border-radius: 100%;
                    width: 0.8rem;
                    height: 0.8rem;
                    background: transparent;
                    opacity: 1;
                }
                
                .swiper-pagination-bullet-active {
                    border-radius: 19rem;
                    width: 5.2rem;
                    height: 2rem;
                    background: var(--color-white);
                }
            `}</style>

            <div className={`${styles['main-banner-slider']} main-banner-slider`}>
                <Swiper
                    ref={swiperRef}
                    loop
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={true}
                >
                    <SwiperSlide>
                        <MainPageBannerTwoOvalPictures/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainPageBannerOneSquarePicture/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainPageBannerTwoRoundPictures/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainPageBannerTheatreThirdRim/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainPageBannerCustom/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
