'use client';

import Link from "next/link";
import {useState} from "react";

import {SvgIcon} from "../../../shared/ui/svg-icon";
import {RENTERS_CATEGORIES} from "../../../shared/config/constants";

import styles from './styles.module.scss';

export function StocksCategories() {
    const [activeMainCategory, setActiveMainCategory] = useState('');
    const [isSelectCategoryActive, setIsSelectCategoryActive] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Все категории');

    const handleActiveCategory = (key) => {
        activeMainCategory === '' || activeMainCategory !== key
            ? setActiveMainCategory(key)
            : setActiveMainCategory('');
    }

    return (
        <aside className={styles['stocks-categories']}>

            <div className={styles['stocks-categories__select-category-wrapper']}>
                <div
                    className={`
                        ${styles['stocks-categories__select-category-back-btn']}
                        ${activeMainCategory && styles['stocks-categories__select-category-back-btn_selected']}
                    `}
                    onClick={() => {
                        setActiveMainCategory('');
                        setActiveCategory('Все категории');
                    }}
                >
                    <SvgIcon id='arrow-transition' color='#000' />
                </div>
                <div
                    className={`
                    ${styles['stocks-categories__select-category']}
                    ${isSelectCategoryActive && styles['stocks-categories__select-category_active']}
                `}
                    onClick={() => setIsSelectCategoryActive(!isSelectCategoryActive)}
                >
                    <span>{activeCategory}</span>
                    <SvgIcon id='chevron' color='#000'  />
                </div>
            </div>

            <div
                className={`
                    ${styles['stocks-categories__wrapper']}
                    ${isSelectCategoryActive && styles['stocks-categories__wrapper_active']}
                `}>
                {
                    Object.keys(RENTERS_CATEGORIES).map((key, index) => (
                        <div key={index}>
                            <div
                                className={`
                                    ${styles['stocks-categories__main-category']}
                                    ${styles['stocks-categories__main-category_desk']}
                                    ${key === activeMainCategory && styles['stocks-categories__main-category_desk-active']}
                                `}
                                onClick={() => handleActiveCategory(key)}
                            >
                                <span>{RENTERS_CATEGORIES[key].name}</span>
                                <SvgIcon id="chevron" color="#000"/>
                            </div>

                            <div
                                className={`
                                    ${styles['stocks-categories__main-category']}
                                    ${styles['stocks-categories__main-category_mob']}
                                    ${activeMainCategory !== '' && styles['stocks-categories__main-category_mob-active']}
                                `}
                                onClick={() => {
                                    handleActiveCategory(key);
                                    setActiveCategory(RENTERS_CATEGORIES[key].name)
                                }}
                            >
                                <span>{RENTERS_CATEGORIES[key].name}</span>
                            </div>

                            <div
                                className={`
                                    ${styles['stocks-categories__subcategories-list']}
                                    ${key === activeMainCategory && styles['stocks-categories__subcategories-list_active']}
                                `}
                            >
                                {
                                    RENTERS_CATEGORIES[key].categories.map((category, index) => (
                                        <Link href="#!" key={index}>{category}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}
