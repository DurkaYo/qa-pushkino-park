import {BreadCrumbs} from "../../../../../widgets/bread-crumbs";

import styles from './styles.module.scss';

export const metadata = {
    title: "Мероприятие",
    description: "Мероприятие",
    keywords: "Мероприятие"
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
        levelName: 'Мероприятие',
        levelLink: '',
    },
]

export default function SingleEventPage() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            SingleEventPage
        </>
    )
}
