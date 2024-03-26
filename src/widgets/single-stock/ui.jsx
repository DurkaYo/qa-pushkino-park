import {BreadCrumbs} from "../bread-crumbs";
import {SingleStockHeader} from "../../entities/single-stock/header";
import {SingleStockBanner} from "../../entities/single-stock/banner";
import {SingleStockBannerWithText} from "../../entities/single-stock/banner-with-text";
import {SingleStockLinksToLandings} from "../../entities/single-stock/links-to-landigs";
import {SingleStockPartners} from "../../entities/single-stock/partners";
import {Gallery} from "../../shared/ui/gallery";

import styles from './styles.module.scss';

export const metadata = {
    title: "Акции и скидки",
    description: "Акции и скидки",
    keywords: "Акции и скидки"
}

const breadCrumbsLevels = [
    {
        levelName: 'Главная',
        levelLink: '/',
    },
    {
        levelName: 'Акции и скидки',
        levelLink: '/stocks',
    },
    {
        levelName: 'Акция и скидка',
        levelLink: '',
    },
]

export function SingleStockWidget() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-renter']}>
                <SingleStockHeader />
                <SingleStockBanner />
                <SingleStockBannerWithText
                    bannerSide='left'
                    button={{text: 'Правила акции'}}
                />
                <SingleStockBannerWithText bannerSide='right' />
                <SingleStockBannerWithText bannerSide='left' />
                <SingleStockBannerWithText bannerSide='right' />
                <SingleStockLinksToLandings />
                <SingleStockPartners />
                <Gallery />
            </main>
        </>
    )
}
