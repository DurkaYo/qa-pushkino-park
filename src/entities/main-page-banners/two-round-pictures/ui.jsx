import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageBannerTwoRoundPictures() {
    return (
        <div className={styles['banner-two-round-pictures']}>
            <div className={`${styles['banner-two-round-pictures']}__container`}>
                <div className={styles['banner-two-round-pictures__grid-wrapper']}>
                    <div className={styles['banner-two-round-pictures__description']}>
                        <div className={styles['banner-two-round-pictures__heading']}>Финальная
                            распродажа</div>
                        <div className={styles['banner-two-round-pictures__text']}>В магазине Francesco Donni стартовала «Финальная распродажа – Скидки до 70%».</div>
                        <Link
                            href='#!'
                            className={`
                                ${styles['banner-two-round-pictures__link']}
                                btn
                            `}
                        >
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles['banner-two-round-pictures__images']}>
                        <div className={styles['banner-two-round-pictures__image']}>
                            <picture>
                                <source srcSet="/images/temp_dev/main-page/main-banner/two-round-pictures/mob.jpg" media="(max-width: 375px)"/>
                                <img src="/images/temp_dev/main-page/main-banner/two-round-pictures/desk.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className={styles['banner-two-round-pictures__image']}>
                            <img src="/images/temp_dev/main-page/main-banner/two-round-pictures/2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
