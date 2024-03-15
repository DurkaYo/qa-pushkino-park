import {MainPageBanners} from "../../../widgets/main-page/banners";
import {MainPageSubscribe} from "../../../widgets/main-page/subscribe";
import {MainPageStocks} from "../../../widgets/main-page/stocks";
import {MainPageStores} from "../../../widgets/main-page/stores";
import {MainPageNews} from "../../../widgets/main-page/news";

import styles from './styles.module.scss';

export default function HomePage() {
    return (
        <main className={styles['home-page']}>
            <MainPageBanners />
            <MainPageSubscribe />
            <MainPageStocks />
            <MainPageStores />
            <MainPageNews />
        </main>
    );
}
