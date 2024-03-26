import {BreadCrumbs} from "../bread-crumbs";
import {SingleRenterHeader} from "../../entities/single-renter/header";
import {SingleRenterContacts} from "../../entities/single-renter/contacts";
import {Gallery} from "../../shared/ui/gallery";
import {SingleRenterStocks} from "../../entities/single-renter/stocks";
import {SingleRenterSimilarRenters} from "../../entities/single-renter/similar-renters";

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
                <Gallery />
                <SingleRenterStocks />
                <SingleRenterSimilarRenters />
            </main>
        </>
    )
}
