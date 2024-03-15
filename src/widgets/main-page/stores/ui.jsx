'use client';

import Link from "next/link";
import {useState} from "react";

import styles from './styles.module.scss';
import {STORES_TYPE} from "./config";

export function MainPageStores() {
    const [currentImage, setCurrentImage] = useState('store1.jpg');

    function hoverStoresTypeLink(event) {
        setCurrentImage(event.target.getAttribute('data-img'))
    }

    return (
        <section className={styles['stores']}>
            <div className={styles['stores__wrapper']}>
                <div className={styles['stores__image']}>
                    <img src={`/images/temp_dev/main-page/stores/${currentImage}`} alt=""/>
                </div>

                <div className={styles['stores__links']}>
                    <div className={styles['stores__links-heading']}>Перейти к магазинам</div>
                    <div className={styles['stores__links-list']}>
                        {
                            STORES_TYPE.map(type => (
                                <Link
                                    href={type.href}
                                    data-img={type.image}
                                    key={type.id}
                                    onMouseEnter={hoverStoresTypeLink}
                                >
                                    {type.typeStore}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
