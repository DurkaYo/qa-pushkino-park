import {BreadCrumbs} from "../../../../widgets/bread-crumbs";
import {RentersList} from "../../../../widgets/renters-list";

import styles from './styles.module.scss';

export const metadata = {
    title: "Магазины",
    description: "Магазины",
    keywords: "Магазины"
};

export default function StoresListPage() {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: 'Магазины',
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <RentersList type='stores' />
        </>
    )
}
