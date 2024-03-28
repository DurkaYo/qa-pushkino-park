'use client';

import {useState} from "react";

import {UISection} from "../../../shared/ui/section";

import styles from './styles.module.scss';

export function NewsAndEventsHeader() {
    const [activeType, setActiveType] = useState('all')

    return (
        <UISection defaultClass={styles['news-events-header']}>
            <h1 className={`${styles['news-events-header__heading']} h1 h1_caps`}>новости и мероприятия</h1>
            <div className={styles['news-events-header__types-list']}>
                <div
                    className={`
                        ${styles['news-events-header__type-item']}
                        ${activeType === 'all' && styles['news-events-header__type-item_active']}
                    `}
                    onClick={() => setActiveType('all')}
                >Все</div>
                <div
                    className={`
                        ${styles['news-events-header__type-item']}
                        ${activeType === 'news' && styles['news-events-header__type-item_active']}
                    `}
                    onClick={() => setActiveType('news')}
                >Новости</div>
                <div
                    className={`
                        ${styles['news-events-header__type-item']}
                        ${activeType === 'events' && styles['news-events-header__type-item_active']}
                    `}
                    onClick={() => setActiveType('events')}
                >Мероприятия</div>
            </div>
        </UISection>
    )
}
