'use client';

import {useSelector} from "react-redux";

import {RentersSingleTile} from "../../../entities/renters-single-tile";
import {RentersGroupTile} from "../../../entities/renters-group-tile";

import styles from './styles.module.scss';

export function RentersListItems() {
    const currentViewMode = useSelector(state => state.viewModeRentersList.value);

    return (
        <section
            className={`
                ${styles['renters-items']}
                ${styles[`renters-items_${currentViewMode}`]}
            `}
        >
            {
                currentViewMode === 'tiles'
                    ? [...Array(10)].map((_, index) => <RentersSingleTile key={index} />)
                    : [...Array(10)].map((_, index) => <RentersGroupTile key={index} />)
            }
        </section>
    )
}
