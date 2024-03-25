import styles from './styles.module.scss';

export function StockTile() {
    return (
        <div className={styles['stock-tile']}>
            <div className={styles['stock-tile__image']}>
                <img src="/images/temp_dev/stocks/stock-tile.png" alt=""/>
            </div>
            <div className={styles['stock-tile__description']}>
                <div className={styles['stock-tile__store-name']}>RALF RINGER</div>
                <div className={styles['stock-tile__title']}>Присоединяйтесь к эко-акции #Добробувь!</div>
                <div className={styles['stock-tile__date']}>01 фев ‒ 01 мар</div>
            </div>
        </div>
    )
}
