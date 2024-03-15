'use client';

import Link from "next/link";

import {UISection} from "../../../shared/ui/section";
import {SliderThreeTiles} from "../../../entities/slider-three-tiles";
import {SliderTwoTiles} from "../../../entities/slider-two-tiles";

import styles from './styles.module.scss';
import {
    ENTERTAINMENT_PARK_SLIDES,
    ENTERTAINMENT_PARK_SLIDES_LONG
} from "./config";

export function MainPageEntertainmentPark() {
    return (
        <UISection defaultClass={styles['park']}>
            <Link href='https://flik-flyak.ru/' className={styles['park__site']}>Перейти на сайт компании</Link>
            <div className={styles['park__heading']}>парк развлечений Флик фляк</div>

            <div className={styles['park__slider']}>
                <SliderThreeTiles slides={ENTERTAINMENT_PARK_SLIDES}/>
            </div>

            <div className={styles['park__subheading']}>Мир красок и веселья</div>

            <SliderTwoTiles slides={ENTERTAINMENT_PARK_SLIDES_LONG}/>
        </UISection>
    )
}
