/**
 * Для компонента хлебных крошек передаем объект с уровнями
 * levels = [
 *   {
 *       levelName: 'Главная',
 *       levelLink: '/',
 *   },
 *   {
 *       levelName: '{уровень по структуре}',
 *       levelLink: '{относительная ссылка}',
 *   },
 *   {
 *       levelName: '{текущий уровень/страница}',
 *       levelLink: '',
 *   },
 * ]
 * */

import Link from "next/link";

import styles from './styles.module.scss';

export function BreadCrumbs({levels}) {
    return (
        <div className={styles['bread-crumbs']}>
            <div className={`${styles['bread-crumbs']}__container ${styles['bread-crumbs__wrapper']}`}>
                {
                    levels.map(level => {
                        if (level.levelLink) {
                            return <>
                                <Link
                                    href={level.levelLink}
                                    className={styles['bread-crumbs__link']}
                                >
                                    {level.levelName}
                                </Link>
                                <span className={styles['bread-crumbs__separator']}>/</span>
                            </>
                        } else {
                            return (
                                <span
                                    className={styles['bread-crumbs__current-leave']}
                                >
                                    {level.levelName}
                                </span>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
