import {BreadCrumbs} from "../../../../../widgets/bread-crumbs";
import {SinglePageHeader} from "../../../../../shared/ui/single-page-header";
import {SingleEventSchedule} from "../../../../../widgets/single-event/schedule";
import {Gallery} from "../../../../../shared/ui/gallery";
import {SingleEventOtherNewsAndEvents} from "../../../../../widgets/single-event/other-news-events";

import styles from './styles.module.scss';

export const metadata = {
    title: "Мероприятие",
    description: "Мероприятие",
    keywords: "Мероприятие"
};

import {breadCrumbsLevels, data} from "./config"; // моковые данные

export default function SingleEventPage() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels}/>
            <main className={styles['single-event']}>
                <SinglePageHeader data={data} />
                <SingleEventSchedule />
                <Gallery />
                <SingleEventOtherNewsAndEvents />
            </main>
        </>
    )
}
