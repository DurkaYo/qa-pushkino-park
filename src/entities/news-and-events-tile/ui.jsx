import Link from "next/link";

import styles from './styles.module.scss';

export function NewsAndEventsListTile() {
    return (
        <Link href='#!' className={styles['news-events-tile']}>
            <div className={styles['news-events-tile__image']}>
                <img src="/images/temp_dev/main-page/news/news-big.jpg" alt=""/>
            </div>
            <div className={styles['news-events-tile__title']}>Мастер-классы в «АндерСон»</div>
        </Link>
    )
}
