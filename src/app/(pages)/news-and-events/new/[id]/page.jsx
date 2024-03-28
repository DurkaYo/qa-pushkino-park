import {BreadCrumbs} from "../../../../../widgets/bread-crumbs";
import {SinglePageHeader} from "../../../../../shared/ui/single-page-header";

import styles from './styles.module.scss';

export const metadata = {
    title: "Новость",
    description: "Новость",
    keywords: "Новость"
};

import {breadCrumbsLevels, data} from "./config"; // моковые данные

export default function SingleNewPage() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-new']}>
                <SinglePageHeader data={data} />
            </main>
        </>
    )
}
