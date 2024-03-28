import {BreadCrumbs} from "../bread-crumbs";
import {SingleRenterHeader} from "../../entities/single-renter/header";
import {SinglePageHeader} from "../../shared/ui/single-page-header";
import {SingleRenterContacts} from "../../entities/single-renter/contacts";
import {Gallery} from "../../shared/ui/gallery";
import {SingleRenterStocks} from "../../entities/single-renter/stocks";
import {SingleRenterSimilarRenters} from "../../entities/single-renter/similar-renters";

import styles from './styles.module.scss';

import {breadCrumbsLevels} from "./config"; // моковые данные
import {data} from "./config"; // моковые данные

export function SingleRenterWidget() {
    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />
            <main className={styles['single-renter']}>
                {/*<SingleRenterHeader />*/}
                <SinglePageHeader data={data} />
                <SingleRenterContacts />
                <Gallery />
                <SingleRenterStocks />
                <SingleRenterSimilarRenters />
            </main>
        </>
    )
}
