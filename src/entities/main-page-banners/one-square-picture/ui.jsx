import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageBannerOneSquarePicture() {
    return (
        <div className={styles['banner-one-square-picture']}>
            <div className={`${styles['banner-one-square-picture']}__container`}>
                <div className={styles['banner-one-square-picture__grid-wrapper']}>
                    <div className={styles['banner-one-square-picture__description']}>
                        <div className={styles['banner-one-square-picture__heading']}>эко-акция #Добробувь!</div>
                        <div className={styles['banner-one-square-picture__text']}>Сдайте ненужную обувь в магазин RALF RINGER, получите купон на 500 рублей на покупку новой пары.</div>
                        <Link
                            href='#!'
                            className={`
                                ${styles['banner-one-square-picture__link']}
                                btn btn_transparent
                            `}
                        >
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles['banner-one-square-picture__image']}>
                        <picture>
                            <source srcSet="/images/temp_dev/main-page/main-banner/one-square-picture/mob.jpg" media="(max-width: 720px)"/>
                            <img src="/images/temp_dev/main-page/main-banner/one-square-picture/desk.jpg" alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
