import {BreadCrumbs} from "../bread-crumbs";
import {SingleStockHeader} from "../../entities/single-stock/header";
import {SinglePageHeader} from "../../shared/ui/single-page-header";
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
                <SingleBanner imgDesk='/images/temp_dev/single-renter/main-banner.jpg' />

                <SingleBannerWithText
                    imgDesk='/images/temp_dev/single-renter/main-banner.jpg'
                    bannerSide='right'
                    button={{text: 'Правила акции'}}
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
