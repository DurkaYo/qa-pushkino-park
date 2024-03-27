import {MainPageBannerTwoOvalPictures} from "../../../entities/main-page-banners/two-oval-pictures";
import {MainPageBannerOneSquarePicture} from "../../../entities/main-page-banners/one-square-picture";
import {MainPageBannerTwoRoundPictures} from "../../../entities/main-page-banners/two-round-pictures";
import {MainPageBannerTheatreThirdRim} from "../../../entities/main-page-banners/theatre-third-rim";
import {MainPageBannerCustom} from "../../../entities/main-page-banners/custom-banner";

import styles from './styles.module.scss';

export function MainPageBanners() {
    return (
        <>
            {/*<MainPageBannerTwoOvalPictures />*/}
            {/*<MainPageBannerOneSquarePicture />*/}
            {/*<MainPageBannerTwoRoundPictures />*/}
            {/*<MainPageBannerTheatreThirdRim />*/}
            <MainPageBannerCustom />
        </>
    )
}
