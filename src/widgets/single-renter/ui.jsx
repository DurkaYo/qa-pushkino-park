import {BreadCrumbs} from "../bread-crumbs";
import {UISection} from "../../shared/ui/section";
import {SingleRenterHeader} from "../../entities/single-renter/header";
import {SingleRenterContacts} from "../../entities/single-renter/contacts";

import styles from './styles.module.scss';

export function SingleRenterWidget() {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: 'Тип Арендатора',
            levelLink: '/#!',
        },
        {
            levelName: 'Название Арендатора',
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-renter']}>
                <SingleRenterHeader />
                <SingleRenterContacts />
            </main>
        </>
    )
}
