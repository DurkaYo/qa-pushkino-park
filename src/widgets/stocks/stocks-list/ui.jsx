import {StockTile} from "../../../entities/stock-tile";
import {ButtonFull} from "../../../shared/ui/buttons";

import styles from './styles.module.scss';

export function StocksList() {
    return (
        <section className={styles['stocks-items']}>

            <div className={styles['stocks-items__list']}>
                {
                    [...Array(9)].map((_, index) => <StockTile key={index}/>)
                }
            </div>

            <div className={styles['stocks-items__button']}>
                <ButtonFull>Показать еще</ButtonFull>
            </div>
        </section>
    )
}
