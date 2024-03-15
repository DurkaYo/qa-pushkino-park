'use client';

import Link from "next/link";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle';

import {UISection} from "../../../shared/ui/section";
import {ButtonCircleTransparentGray} from "../../../shared/ui/buttons";

import styles from './styles.module.scss';

export function MainPageNews() {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['news']}>
            <div className={styles['news__preheading']}>Перейти ко всем новостям</div>
            <div className={styles['news__heading']}>Новости и мероприятия</div>

            <div className={styles['news__slider-buttons']}>
                <div onClick={handlePrev}>
                    <ButtonCircleTransparentGray isRevers={true}/>
                </div>
                <div onClick={handleNext}>
                    <ButtonCircleTransparentGray isRevers={false}/>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                loop
            >
                <SwiperSlide>
                    <div className={styles['news__slide']}>
                        <div className={styles['news__slide-half']}>
                        <Link href="#!" className={styles['news__big-image-block']}>
                            <div className={styles['news__big-image']}>
                                <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                            </div>
                            <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                        </Link>
                        <div className={styles['news__small-images']}>
                            <Link href="#!" className={styles['news__small-image-block']}>
                                <div className={styles['news__small-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <Link href="#!" className={styles['news__small-image-block']}>
                                <div className={styles['news__small-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                        </div>
                        </div>
                        <div className={styles['news__slide-half']}>
                            <Link href="#!" className={styles['news__big-image-block']}>
                                <div className={styles['news__big-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <div className={styles['news__small-images']}>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['news__slide']}>
                        <div className={styles['news__slide-half']}>
                            <Link href="#!" className={styles['news__big-image-block']}>
                                <div className={styles['news__big-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <div className={styles['news__small-images']}>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles['news__slide-half']}>
                            <Link href="#!" className={styles['news__big-image-block']}>
                                <div className={styles['news__big-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <div className={styles['news__small-images']}>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['news__slide']}>
                        <div className={styles['news__slide-half']}>
                            <Link href="#!" className={styles['news__big-image-block']}>
                                <div className={styles['news__big-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <div className={styles['news__small-images']}>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles['news__slide-half']}>
                            <Link href="#!" className={styles['news__big-image-block']}>
                                <div className={styles['news__big-image']}>
                                    <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
                                </div>
                                <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                            </Link>
                            <div className={styles['news__small-images']}>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                                <Link href="#!" className={styles['news__small-image-block']}>
                                    <div className={styles['news__small-image']}>
                                        <img src="/images/temp_dev/main-page/news/news-small.jpg" alt=""/>
                                    </div>
                                    <div className={styles['news__title']}>Заголовок Заголовок Заголовок</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </UISection>
    )
}
