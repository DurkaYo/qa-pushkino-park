import {RentersListFilter} from "../../features/renters-list/filter";
import {RentersListCategories} from "../../features/renters-list/categories";
import {RentersListItems} from "../../features/renters-list/items";

import styles from './styles.module.scss';
import {RENTERS_CATEGORIES} from "../../shared/config/constants";

export function RentersList({type}) {
    return (
        <main className={styles['renters-list']}>
            <div className={`${styles['renters-list']}__container`}>
                <h1 className={`${styles['renters-list__heading']} h1 h1_caps`}>{RENTERS_CATEGORIES[type].name}</h1>
                <RentersListFilter />

                <div className={styles['renters-list__wrapper']}>
                    <RentersListCategories categories={RENTERS_CATEGORIES[type].categories} />
                    <RentersListItems />
                </div>
            </div>
        </main>
    )
}
