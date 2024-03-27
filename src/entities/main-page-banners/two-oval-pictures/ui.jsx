import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageBannerTwoOvalPictures() {
    return (
        <div className={styles['banner-two-oval-pictures']}>
            <div className={`${styles['banner-two-oval-pictures']}__container`}>
                <div className={styles['banner-two-oval-pictures__grid-wrapper']}>
                    <div className={styles['banner-two-oval-pictures__description']}>
                        <div className={styles['banner-two-oval-pictures__heading']}>Зимний <span>SaLE</span></div>
                        <div className={styles['banner-two-oval-pictures__text']}>Позволь себе больше в новом году</div>
                        <Link
                            href='#!'
                            className={`
                                ${styles['banner-two-oval-pictures__link']}
                                btn
                            `}
                        >
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles['banner-two-oval-pictures__images']}>
                        <div className={styles['banner-two-oval-pictures__image']}>
                            <img src="/images/temp_dev/main-page/main-banner/two-oval-pictures/1.jpg" alt=""/>
                        </div>
                        <div className={styles['banner-two-oval-pictures__image']}>
                            <img src="/images/temp_dev/main-page/main-banner/two-oval-pictures/2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
