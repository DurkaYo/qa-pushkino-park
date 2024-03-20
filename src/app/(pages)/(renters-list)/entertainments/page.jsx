import {BreadCrumbs} from "../../../../widgets/bread-crumbs";
import {RentersList} from "../../../../widgets/renters-list";

import styles from './styles.module.scss';

export const metadata = {
    title: "Развлечение",
    description: "Развлечение",
    keywords: "Развлечение"
};

export default function EntertainmentsListPage() {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: 'Развлечение',
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <RentersList type='entertainments' />
        </>
    )
}
