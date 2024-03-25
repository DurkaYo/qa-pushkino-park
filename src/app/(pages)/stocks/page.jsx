import {BreadCrumbs} from "../../../widgets/bread-crumbs";
import {StocksCategories} from "../../../widgets/stocks/stocks-categories";
import {StocksList} from "../../../widgets/stocks/stocks-list";

import styles from './styles.module.scss';
import {metaData} from "./config";
import {breadCrumbsLevels} from "./config";

export const metadata = metaData;

export default function StocksListPage() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['stocks-list']}>
                <div className={`${styles['stocks-list']}__container`}>
                    <h1 className={`${styles['stocks-list__heading']} h1 h1_caps`}>Акции и скидки</h1>
                    <div className={styles['stocks-list__wrapper']}>
                        <StocksCategories />
                        <StocksList />
                    </div>
                </div>
            </main>
        </>
    )
}
