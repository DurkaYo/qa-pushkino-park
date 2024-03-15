'use client';

import Link from "next/link";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

import styles from './styles.module.scss';

export function MainPageStocks() {
    return (
        <>
            <style>{`                
                .stocks__swiper .swiper-wrapper {
                    transition-timing-function: linear;
                }
            `}</style>

            <section className={styles['stocks']}>
                <div className={styles['stocks__wrapper']}>
                    <div className={styles['stocks__description']}>
                        <div className={styles['stocks__heading']}>
                            Акции
                        </div>
                        <div className={styles['stocks__content']}>
                            Тысячи предложений в сотне магазинов.
                        </div>
                        <Link href='#!' className={styles['stocks__button']}>
                            Показать все
                        </Link>
                        <div className={styles['stocks__content-warning']}>
                            Обратите внимание: Время проведения акций ограничено. Подробности узнавайте на кассе
                            магазинов.
                        </div>
                    </div>

                    <div className={styles['stocks__slider']}>
                        <div className={styles['stocks__slider-wrapper']}>
                            <Swiper
                                modules={[Autoplay]}
                                direction="vertical"
                                slidesPerView={.51}
                                autoplay={{
                                    delay: 0,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: false,
                                }}
                                loop
                                speed={20000}
                                breakpoints={{
                                    720: {
                                        slidesPerView: .415,
                                    },
                                    1440: {
                                        slidesPerView: .765,
                                    }
                                }}
                                className={`${styles['stocks__swiper']} stocks__swiper`}
                            >
                                <SwiperSlide>
                                    <div className={styles['stocks__swiper-slide']}>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                1. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                2. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                3. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                4. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                5. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                6. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles['stocks__swiper-slide']}>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                7. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                8. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                9. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                10. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                11. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                12. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles['stocks__swiper-slide']}>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                13. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                14. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                15. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                16. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                17. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                        <Link href='#!' className={styles['stocks__slide-tile']}>
                                            <img src="/images/main-page/stock.png"/>
                                            <div className={styles['stocks__slide-heading']}>
                                                18. Воспользуйтесь исключительными преимуществами!
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
