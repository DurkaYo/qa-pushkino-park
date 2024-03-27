import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageBannerCustom() {
    return (
        <div className={styles['banner-custom']}>
            <div className={`${styles['banner-custom']}__container`}>
                <div className={styles['banner-custom__wrapper']}>
                    <div className={styles['banner-custom__description']}>
                        <div className={styles['banner-custom__heading']}>детский праздник в Андерсон</div>
                        <Link
                            href='#!'
                            className={`
                                ${styles['banner-custom__link']}
                                btn
                            `}
                        >
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles['banner-custom__image']}>
                        <picture>
                            <source srcSet="/images/temp_dev/main-page/main-banner/custom/mob.jpg" media="(max-width: 375px)"/>
                            <img src="/images/temp_dev/main-page/main-banner/custom/desk.jpg" alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
