'use client';

import Link from "next/link";

import styles from './styles.module.scss';

import {SubscribeEmail} from "@/features/subscribe-email";
import {SocialBlock} from "@/shared/ui/social-block";
import {WORKING_TIME_CINEMA, WORKING_TIME_GALLERY, ADDRESS, MENU_LINKS} from "@/shared/config/constants";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__white-block']}>
                <div className={`${styles['footer']}__container`}>
                    <div className={styles['footer__logo-block']}>
                        <div className={styles['footer__logo-img']}>
                            <img src="/images/main-logo/black.png" alt="Логотип Пушкино Парк"/>
                        </div>
                        <div
                            className={styles['footer__up-link']}
                            onClick={scrollToTop}
                        >
                            <span>Наверх</span>
                            <svg className='svg-icon' viewBox="0 0 24 24" width="24" height="24">
                                <use href="/images/icons/sprite.svg#arrow-up" x="0" y="0"></use>
                            </svg>
                        </div>
                    </div>

                    <div className={styles['footer__menu-list']}>
                        {
                            MENU_LINKS.map((menuList : object, index) => (
                                    <div className={styles['footer__menu-list-block']} key={index}>
                                        {
                                            Object.keys(menuList).map((key, index) => (
                                                <Link href={menuList[key as keyof typeof menuList]['link']} className={styles['footer__menu-link']} key={index}>{key}</Link>
                                            ))
                                        }
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>

            <div className={styles['footer__color-block']}>
                <div className={`${styles['footer']}__container`}>
                    <div className={`${styles['footer__work-time']}`}>
                        <div className={`${styles['footer__work-time-institution']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Галерея</div>
                            <div className={`${styles['footer__work-time-days']}`}>{WORKING_TIME_GALLERY.days}</div>
                            <div className={`${styles['footer__work-time-timing']}`}>{WORKING_TIME_GALLERY.hours}</div>
                        </div>
                        <div className={`${styles['footer__work-time-institution']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Кинотеатр</div>
                            <div className={`${styles['footer__work-time-days']}`}>{WORKING_TIME_CINEMA.days}</div>
                            <div className={`${styles['footer__work-time-timing']}`}>{WORKING_TIME_CINEMA.hours}</div>
                        </div>
                        <div className={`${styles['footer__subscribe']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Эксклюзивные новости</div>
                            <div className={`${styles['footer__subscribe-email']}`}>
                                <SubscribeEmail button='ButtonCircleTransparentWhite' />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['footer__contacts']}`}>
                        <div className={`${styles['footer__contacts-data']}`}>
                            <div className={`${styles['footer__contacts-data-item']}`}>© 2024 ТРЦ «Пушкино Парк»</div>
                            <div className={`${styles['footer__contacts-data-item']}`}>{ADDRESS}</div>
                        </div>

                        <div className={`${styles['footer__social-links']}`}>
                            <SocialBlock />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
