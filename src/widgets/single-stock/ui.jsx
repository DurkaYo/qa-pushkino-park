import {BreadCrumbs} from "../bread-crumbs";
import {SingleStockHeader} from "../../entities/single-stock/header";
import {SinglePageHeader} from "../../shared/ui/single-page-header";
import {SingleStockBanner} from "../../entities/single-stock/banner";
import {SingleStockBannerWithText} from "../../entities/single-stock/banner-with-text";
import {SingleBanner} from "../../shared/single-banner";
import {SingleBannerWithText} from "../../shared/single-banner-with-text";
import {SingleStockLinksToLandings} from "../../entities/single-stock/links-to-landigs";
import {SingleStockPartners} from "../../entities/single-stock/partners";
import {Gallery} from "../../shared/ui/gallery";
import {SingleStockOtherStocks} from "../../entities/single-stock/other-stocks";

import styles from './styles.module.scss';

export const metadata = {
    title: "Акции и скидки",
    description: "Акции и скидки",
    keywords: "Акции и скидки"
}

import {breadCrumbsLevels} from '../../app/(pages)/stocks/[id]/config'; // моковые данные
import {data} from "../../app/(pages)/stocks/[id]/config"; // моковые данные

export function SingleStockWidget() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-renter']}>
                {/*<SingleStockHeader />*/}
                <SinglePageHeader data={data} />
                <SingleStockBanner />
                <SingleStockBannerWithText
                    bannerSide='left'
                    button={{text: 'Правила акции'}}
                />
                <SingleBannerWithText
                    imgDesk='/images/temp_dev/single-renter/main-banner.jpg'
                    bannerSide='right'
                />
                <SingleBannerWithText
                    imgDesk='/images/temp_dev/single-renter/main-banner.jpg'
                    bannerSide='left'
                />
                <SingleBannerWithText
                    imgDesk='/images/temp_dev/single-renter/main-banner.jpg'
                    bannerSide='right'
                />

                <SingleStockLinksToLandings />
                <SingleStockPartners />
                <Gallery />
                <SingleStockOtherStocks />
            </main>
        </>
    )
}
