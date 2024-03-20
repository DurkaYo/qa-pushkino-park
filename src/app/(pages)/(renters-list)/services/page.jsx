import {BreadCrumbs} from "../../../../widgets/bread-crumbs";
import {RentersList} from "../../../../widgets/renters-list";

import styles from './styles.module.scss';

export const metadata = {
    title: "Услуги и сервис",
    description: "Услуги и сервис",
    keywords: "Услуги и сервис"
};

export default function ServicesListPage() {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: 'Услуги и сервис',
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <RentersList type='services' />
        </>
    )
}
