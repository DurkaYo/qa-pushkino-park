import Link from "next/link";

import styles from './styles.module.scss';

export function MainPageStocks() {
    return (
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
                        Обратите внимание: Время проведения акций ограничено. Подробности узнавайте на кассе магазинов.
                    </div>
                </div>
                <div className={styles['stocks__slider']}>
                    Слайдер
                </div>
            </div>
        </section>
    )
}
