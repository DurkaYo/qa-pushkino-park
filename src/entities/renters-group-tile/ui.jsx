import Link from "next/link";
import {SvgIcon} from "../../shared/ui/svg-icon";

import styles from './styles.module.scss';

export function RentersGroupTile() {
    return (
        <div className={styles['renters-group-tile']}>
            <div className={styles['renters-group-tile__liter']}>
                A
            </div>
            <div className={styles['renters-group-tile__renters']}>
                <RentersGroupTileRenter />
                <RentersGroupTileRenter />
                <RentersGroupTileRenter />
                <RentersGroupTileRenter />
            </div>
        </div>
    )
}

function RentersGroupTileRenter() {
    return (
        <div className={styles['renters-group-tile__renter']}>
            <Link href='#!'>
                <div className={styles['renters-group-tile__renter-title']}>АВС оптика</div>
                <div className={styles['renters-group-tile__renter-category']}>Красота и здоровье</div>
                <div className={styles['renters-group-tile__renter-stocks']}>
                    <div
                        className={`
                        ${styles['renters-group-tile__renter-stock']}
                        ${styles['renters-group-tile__renter-stock_green']}
                    `}
                    >Новинка
                    </div>
                    <div
                        className={`
                        ${styles['renters-group-tile__renter-stock']}
                        ${styles['renters-group-tile__renter-stock_orange']}
                    `}
                    >Акции
                    </div>
                </div>
            </Link>
            <div className={styles['renters-group-tile__renter-navigation']}>
                <div className={styles['renters-group-tile__renter-floor']}>1 этаж</div>
                <Link href='#!' className={styles['renters-group-tile__renter-map']}>
                    <SvgIcon id='map' color='#ed5d2b'/>
                    <span>Показать на карте</span>
                </Link>
            </div>
        </div>
    )
}
