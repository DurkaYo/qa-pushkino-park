import styles from './styles.module.scss';

import {MainPageBanners} from "../../../widgets/main-page/banners";
import {MainPageSubscribe} from "../../../widgets/main-page/subscribe";
import {MainPageStocks} from "../../../widgets/main-page/stocks";

export default function HomePage() {
    return (
        <main className={styles['home-page']}>
            <MainPageBanners />
            <MainPageSubscribe />
            <MainPageStocks />
        </main>
    );
}
