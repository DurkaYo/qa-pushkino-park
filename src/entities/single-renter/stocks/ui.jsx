'use client';

import {UISection} from "../../../shared/ui/section";
import {SliderTwoTiles} from "../../slider-two-tiles";

import 'swiper/css';
import 'swiper/css/bundle';

import styles from './styles.module.scss';
import {RENTER_STOCKS_SLIDES_LONG} from './config';

export function SingleRenterStocks() {
    return (
        <UISection defaultClass={styles['renter-stocks']}>
            <div className={styles['renter-stocks__heading']}>Действующие акции</div>

            <div className={styles['renter-stocks__slider']}>
                <SliderTwoTiles slides={RENTER_STOCKS_SLIDES_LONG}/>
            </div>
        </UISection>
)
}
