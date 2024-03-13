import type {JSX} from "react";

import styles from './styles.module.scss';

import {MainPageBanners} from "@/widgets/main-page/banners";
import {MainPageSubscribe} from "@/widgets/main-page/subscribe";

export default function HomePage(): JSX.Element {
    return (
        <main className={styles['home-page']}>
            <MainPageBanners />
            <MainPageSubscribe />
        </main>
    );
}
