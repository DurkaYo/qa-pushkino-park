'use client';



import styles from './styles.module.scss';


import {UISection} from "../../../shared/ui/section";

import Link from "next/link";

export function AboutPresentation() {


    return (
        <UISection defaultClass={styles['about__presentation']}>
            <p className={styles['about__desc']}>Первый в&nbsp;городе Пушкино торгово-развлекательный центр для полноценного семейного отдыха</p>
            <Link  href='/' className={`${styles['about__link']} btn`}>Скачать презентацию</Link>

        </UISection>
    )
}
