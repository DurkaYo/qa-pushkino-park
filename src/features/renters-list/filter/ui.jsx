'use client';

import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {Input} from "../../../shared/ui/inputs";
import {Checkbox} from "../../../shared/ui/checkbox";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {changeViewMode} from "../../../shared/lib/store/slices/viewModeRentersList";

import styles from './styles.module.scss';

export function RentersListFilter() {
    const currentViewMode = useSelector(state => state.viewModeRentersList.value);
    const dispatch = useDispatch();

    const [isFloorListShow, setIsFloorListShow] = useState(false);

    return (
        <section className={styles['renters-filter']}>
            <div className={styles['renters-filter__wrapper']}>
                <div className={styles['renters-filter__search']}>
                    <Input attributes={{placeholder: 'Поиск по названию'}} isInputTypeSearch={true}/>
                </div>
                <div className={styles['renters-filter__floor']}>
                    <div
                        className={`
                            ${styles['renters-filter__floor-button']}
                            ${isFloorListShow ? styles['renters-filter__floor-button_active'] : ''}
                        `}
                        onClick={() => setIsFloorListShow(!isFloorListShow)}
                    >
                        <span>Этаж</span>
                        <SvgIcon id='chevron' color='black'/>
                    </div>
                    <div
                        className={`
                            ${styles['renters-filter__param-list']} 
                            ${isFloorListShow ? styles['renters-filter__param-list_active'] : ''}
                        `}
                    >
                        <div className={styles['renters-filter__param-list-item']}>
                            <Checkbox id="parking" label="Павильоны на парковке"/>
                        </div>
                        <div className={styles['renters-filter__param-list-item']}>
                            <Checkbox id="first-floor" label="1 этаж"/>
                        </div>
                        <div className={styles['renters-filter__param-list-item']}>
                            <Checkbox id="second-floor" label="2 этаж"/>
                        </div>
                        <div
                            className={`
                                ${styles['renters-filter__param-list-item']}
                                ${styles['renters-filter__param-list-item_mobile']}
                            `}
                        >
                            <Checkbox id="stocks-mob" label="Акции"/>
                        </div>
                        <div
                            className={`
                                ${styles['renters-filter__param-list-item']}
                                ${styles['renters-filter__param-list-item_mobile']}
                            `}
                        >
                            <Checkbox id="new-mob" label="Новинки"/>
                        </div>
                    </div>
                </div>
                <div className={styles['renters-filter__stocks']}>
                    <div className={styles['renters-filter__stock']}>
                        <Checkbox id="stocks" label="Акции"/>
                    </div>
                    <div className={styles['renters-filter__stock']}>
                        <Checkbox id='new' label='Новинки'/>
                    </div>
                </div>
            </div>
            <div className={styles['renters-filter__view-modes']}>
                <div
                    className={styles['renters-filter__mobile-params']}
                    onClick={() => setIsFloorListShow(!isFloorListShow)}
                >
                    <SvgIcon id='filter' color='balck'/>
                </div>
                <div
                    className={styles['renters-filter__view-mode']}
                    onClick={() => dispatch(changeViewMode('tiles'))}
                >
                    <SvgIcon
                        id='grid'
                        color={currentViewMode === 'tiles' ? '#3383a4' : '#000'}
                    />
                </div>
                <div
                    className={styles['renters-filter__view-mode']}
                    onClick={() => dispatch(changeViewMode('list'))}
                >
                    <SvgIcon
                        id='apps-list'
                        color={currentViewMode === 'list' ? '#3383a4' : '#000'}
                    />
                </div>
            </div>
        </section>
    )
}
