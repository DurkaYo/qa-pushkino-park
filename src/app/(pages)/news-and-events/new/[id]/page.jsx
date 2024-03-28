import {BreadCrumbs} from "../../../../../widgets/bread-crumbs";

import styles from './styles.module.scss';

export const metadata = {
    title: "Новость",
    description: "Новость",
    keywords: "Новость"
};

export const breadCrumbsLevels = [
    {
        levelName: 'Главная',
        levelLink: '/',
    },
    {
        levelName: 'Новости и мероприятия',
        levelLink: '/news-and-events',
    },
    {
        levelName: 'Новость',
        levelLink: '',
    },
]

export default function SingleNewPage() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-new']}>

            </main>
        </>
    )
}
