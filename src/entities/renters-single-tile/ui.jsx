import Link from "next/link";

import {SvgIcon} from "../../shared/ui/svg-icon";

import styles from './styles.module.scss';

export function RentersSingleTile() {
    return (
        <div className={styles['renters-single-tile']}>
            <Link href='#!'>
                <div className={styles['renters-single-tile__stocks']}>
                    <div
                        className={`
                            ${styles['renters-single-tile__stock']}
                            ${styles['renters-single-tile__stock_green']}
                        `}
                    >Акции</div>
                    <div
                        className={`
                            ${styles['renters-single-tile__stock']}
                            ${styles['renters-single-tile__stock_orange']}
                        `}
                    >Новинка</div>
                </div>
                <div className={styles['renters-single-tile__image']}>
                    <img src="/images/temp_dev/renters/renter.jpg" alt=""/>
                </div>
                <div className={styles['renters-single-tile__title']}>O'Stin</div>
                <div className={styles['renters-single-tile__category']}>Женская одежда</div>
            </Link>
            <div className={styles['renters-single-tile__location']}>
                <Link href='#!' className={styles['renters-single-tile__map']}>
                    <SvgIcon id='map' color='#ed5d2b' />
                    <span>Показать на карте</span>
                </Link>
                <div className={styles['renters-single-tile__floor']}>1 этаж</div>
            </div>
        </div>
    )
}
