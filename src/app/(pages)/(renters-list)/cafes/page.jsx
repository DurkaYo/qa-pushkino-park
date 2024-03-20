import {BreadCrumbs} from "../../../../widgets/bread-crumbs";
import {RentersList} from "../../../../widgets/renters-list";

import styles from './styles.module.scss';

export const metadata = {
    title: "Кафе и рестораны",
    description: "Кафе и рестораны",
    keywords: "Кафе и рестораны"
};

export default function CafesListPage() {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: 'Кафе и рестораны',
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <RentersList type='cafes' />
        </>
    )
}
