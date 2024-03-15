'use client';

import Link from "next/link";

import {UISection} from "../../../shared/ui/section";
import {SliderThreeTiles} from "../../../entities/slider-three-tiles";

import styles from './styles.module.scss';
import {THEATRE_SLIDES} from "./config";

export function MainPageTheatre() {
    return (
        <UISection defaultClass={styles['theatre']}>
            <div className={styles['theatre__top-line']}>
                <div className={styles['theatre__data']}>
                    <Link href='https://t-rim.ru/' className={styles['theatre__site']}>Перейти на сайт театра</Link>
                    <div className={styles['theatre__date']}>вторник, 9 января, 14:00</div>
                </div>
                <div className={styles['theatre__heading']}>Афиша театра III Р.И.М.</div>
            </div>

            <SliderThreeTiles slides={THEATRE_SLIDES} />
        </UISection>
    )
}
