import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageBannerTheatreThirdRim() {
    return (
        <div className={styles['banner-theatre-third-rim']}>
            <div className={`${styles['banner-theatre-third-rim']}__container`}>
                <div className={styles['banner-theatre-third-rim__wrapper']}>
                    <div className={styles['banner-theatre-third-rim__description']}>
                        <div className={styles['banner-theatre-third-rim__heading']}>Афиша театра III Р.И.М.</div>
                        <div className={styles['banner-theatre-third-rim__text']}>В магазине Francesco Donni стартовала «Финальная распродажа – Скидки до 70%».</div>
                        <Link
                            href='#!'
                            className={`
                                ${styles['banner-theatre-third-rim__link']}
                                btn
                            `}
                        >
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles['banner-theatre-third-rim__image']}>
                        <picture>
                            <source srcSet="/images/temp_dev/main-page/main-banner/theatre-third-rim/mob.jpg" media="(max-width: 375px)"/>
                            <img src="/images/temp_dev/main-page/main-banner/theatre-third-rim/desk.jpg" alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
