'use client';

import {useState} from "react";

import {SvgIcon} from "../../../shared/ui/svg-icon";

import styles from './styles.module.scss';

export function RentersListCategories({categories}) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    function changeSelectedCategories(category, action) {
        if (action === 'add' && !selectedCategories.includes(category)) {
            setSelectedCategories([...selectedCategories, category]);
        } else if (action === 'remove' && selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        }
    }

    return (
        <aside className={styles['categories']}>
            <ul className={styles['categories__list']}>
                {
                    categories.map((category, index) =>
                        <li
                            className={`
                                ${styles['categories__item']}
                                ${selectedCategories.includes(category) ? styles['categories__item_active'] : ''}
                            `}
                            key={index}
                        >
                            <span onClick={() => changeSelectedCategories(category, 'add')}>
                                {category}
                            </span>
                            <span onClick={() => changeSelectedCategories(category, 'remove')}>
                                <SvgIcon id='close' color='#ed5d2b'/>
                            </span>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}
