'use client';

import Link from "next/link";
import type {JSX} from "react";

import styles from './styles.module.scss';

import {SubscribeEmail} from "/features/subscribe-email";
import {SocialBlock} from "/shared/ui/social-block";

export function Footer(): JSX.Element {
    const scrollToTop = ():void => {
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
                        <div className={styles['footer__menu-list-block']}>
                            <Link href='#!' className={styles['footer__menu-link']}>Магазины</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Кафе и рестораны</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Развлечения</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Услуги и сервис</Link>
                        </div>
                        <div className={styles['footer__menu-list-block']}>
                            <Link href='#!' className={styles['footer__menu-link']}>Новости и мероприятия</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Акции</Link>
                        </div>
                        <div className={styles['footer__menu-list-block']}>
                            <Link href='#!' className={styles['footer__menu-link']}>Контакты</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Вакансии</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Арендаторам</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>О ТРЦ</Link>
                            <Link href='#!' className={styles['footer__menu-link']}>Правила ТРЦ</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['footer__color-block']}>
                <div className={`${styles['footer']}__container`}>
                    <div className={`${styles['footer__work-time']}`}>
                        <div className={`${styles['footer__work-time-institution']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Галерея</div>
                            <div className={`${styles['footer__work-time-days']}`}>Ежедневно</div>
                            <div className={`${styles['footer__work-time-timing']}`}>10:00-22:00</div>
                        </div>
                        <div className={`${styles['footer__work-time-institution']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Кинотеатр</div>
                            <div className={`${styles['footer__work-time-days']}`}>Ежедневно</div>
                            <div className={`${styles['footer__work-time-timing']}`}>10:00-02:00</div>
                        </div>
                        <div className={`${styles['footer__subscribe']}`}>
                            <div className={`${styles['footer__work-time-heading']}`}>Эксклюзивные новости</div>
                            <div className={`${styles['footer__subscribe-email']}`}>
                                <SubscribeEmail />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['footer__contacts']}`}>
                        <div className={`${styles['footer__contacts-data']}`}>
                            <div className={`${styles['footer__contacts-data-item']}`}>© 2024 ТРЦ «Пушкино Парк»</div>
                            <div className={`${styles['footer__contacts-data-item']}`}>г. Пушкино, Красноармейское
                                шоссе, стр. 104
                            </div>
                        </div>

                        <SocialBlock />

                        {/*<div className={`${styles['footer__social']}`}>*/}
                        {/*    <Link href="#!" className={`${styles['footer__social-link']}`}>*/}
                        {/*        <img src="/images/icons/vkontakte.png" alt="Vkontakte"/>*/}
                        {/*    </Link>*/}
                        {/*    <Link href="#!" className={`${styles['footer__social-link']}`}>*/}
                        {/*        <img src="/images/icons/telegram.png" alt="Telegram"/>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </footer>
    )
}
