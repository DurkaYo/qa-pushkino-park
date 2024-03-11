'use client';

import Link from "next/link";
import {useState, useEffect} from "react";

import styles from './styles.module.scss';

import {SocialBlock} from "/shared/ui/social-block";
import {SvgIcon} from "/shared/ui/svg-icon";
import {Input} from "/shared/ui/inputs";
import {WORKING_TIME_GALLERY, WORKING_TIME_CINEMA, PHONE_NUMBER} from "/shared/config/constants";

export function Header() {
    const [colorIconSvg, setColorIconSvg] = useState('white');

    const styleVariables = document.documentElement.style; // CSSStyleDeclaration

    useEffect(() => {
        if (location.pathname === '/') {
            scrollChangeHeaderForMainPage();
        } else {
            changeHeaderForInternalPage();
            scrollChangeHeaderForInternalPage();
        }
    }, []);

    function changeHeader(typeHeader) {
        const headerLogo = document.querySelector('.js-header-logo img');

        if (typeHeader === 'white') {
            styleVariables.setProperty('--header-background-color', 'white');
            styleVariables.setProperty('--top-line-color', 'var(--color-black)');
            styleVariables.setProperty('--top-line-border-color', 'rgba(0, 0, 0, .3)');
            styleVariables.setProperty('--cta-background-color', 'var(--bg-cyan)');

            headerLogo && headerLogo.setAttribute('src', '/images/main-logo/black.png');

            setColorIconSvg('black');
        } else if (typeHeader === 'black') {
            styleVariables.setProperty('--header-background-color', 'linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0) 100%)');
            styleVariables.setProperty('--top-line-color', 'var(--color-white)');
            styleVariables.setProperty('--top-line-border-color', 'rgba(255, 255, 255, .3)');
            styleVariables.setProperty('--cta-background-color', 'transparent');

            headerLogo && headerLogo.setAttribute('src', '/images/main-logo/white.png');

            setColorIconSvg('white');
        }
    }

    function scrollChangeHeaderForMainPage() {
        document.addEventListener('wheel', event => {
            if (scrollY === 0) {
                styleVariables.setProperty('--display-cta', 'block');
                changeHeader('black');
            } else if (scrollY > 0 && event.deltaY > 0) {
                styleVariables.setProperty('--display-cta', 'none');
                changeHeader('white');
            } else if (scrollY > 0 && event.deltaY < 0) {
                styleVariables.setProperty('--display-cta', 'block');
                changeHeader('white');
            }
        });
    }

    function changeHeaderForInternalPage() {
        styleVariables.setProperty('--header-position', 'static');
        changeHeader('white');
    }

    function scrollChangeHeaderForInternalPage() {
        document.addEventListener('wheel', event => {
            if (scrollY === 0) {
                styleVariables.setProperty('--display-cta', 'block');
                styleVariables.setProperty('--header-position', 'static');
            } else if (scrollY > 0 && event.deltaY > 0) {
                styleVariables.setProperty('--display-cta', 'none');
                styleVariables.setProperty('--header-position', 'fixed');
            } else if (scrollY > 0 && event.deltaY < 0) {
                styleVariables.setProperty('--display-cta', 'block');
                styleVariables.setProperty('--header-position', 'fixed');
            }
        });
    }

    return (
        <header className={styles['header']}>
            <div className={`${styles['header']}__container`}>

                <div className={styles['header__top-line']}>
                    <div className={styles['header__top-line-wrap']}>
                        <div className={`${styles['header__logo']} js-header-logo`}>
                            <img src="/images/main-logo/white.png" alt="Логотип Пушкино Парк"/>
                        </div>
                        <div className={styles['header__working-time']}>
                            <SvgIcon id='clock' color={colorIconSvg} />
                            <span>{WORKING_TIME_GALLERY.hours}</span>
                        </div>
                    </div>
                    <div className={styles['header__top-line-wrap']}>
                        <div className={styles['header__phone-number']}>
                            <SvgIcon id='call' color={colorIconSvg} />
                            <span>{PHONE_NUMBER}</span>
                        </div>
                        <div className={styles['header__social-links']}>
                            <SocialBlock />
                        </div>
                        <button className={styles['header__menu-btn']}>
                            <span>Меню</span>
                            <SvgIcon id='burger' color={colorIconSvg} />
                        </button>
                    </div>
                </div>

                <div className={styles['header__cta']}>
                    <div className={styles['header__cta-wrapper']}>
                        <Input
                            attributes={
                                {
                                    type: 'text',
                                    placeholder: 'Поиск',
                                }
                            }
                            isInputTypeSearch={true}
                        />
                        <button className={styles['header__cta-btn']}>
                            <SvgIcon id='map' color='white' />
                            <span>Карта ТРЦ</span>
                        </button>
                        <button className={styles['header__cta-btn']}>
                            <SvgIcon id='location' color='white' />
                            <span>Как добраться?</span>
                        </button>
                    </div>
                </div>

                <nav className={styles['header__nav']}>

                    <div className={styles['header__nav-menu-list']}>
                        <Link href='#!' className={styles['header__nav-main-link']}>Магазины</Link>
                        <div className={styles['header__nav-heading']}>
                            <span>Магазины</span>
                            <SvgIcon id='chevron' color='black' />
                        </div>
                        <div className={styles['header__nav-sub-links']}>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                        </div>
                        <Link href='#!' className={styles['header__nav-main-link']}>Магазины</Link>
                        <div className={styles['header__nav-heading']}>
                            <span>Магазины</span>
                            <SvgIcon id='chevron' color='black' />
                        </div>
                        <div className={styles['header__nav-sub-links']}>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                        </div>
                        <Link href='#!' className={styles['header__nav-main-link']}>Магазины</Link>
                        <div className={styles['header__nav-heading']}>
                            <span>Магазины</span>
                            <SvgIcon id='chevron' color='black' />
                        </div>
                        <div className={styles['header__nav-sub-links']}>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                        </div>
                        <Link href='#!' className={styles['header__nav-main-link']}>Магазины</Link>
                        <div className={styles['header__nav-heading']}>
                            <span>Магазины</span>
                            <SvgIcon id='chevron' color='black' />
                        </div>
                        <div className={styles['header__nav-sub-links']}>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                            <Link href='#!' className={styles['header__nav-sub-link']}>Женская одежда</Link>
                        </div>
                    </div>

                    <div className={styles['header__nav-wrapper']}>
                        <div className={styles['header__nav-menu-list']}>
                            <div className={styles['header__nav-heading']}>Новости</div>
                            <Link href="#!" className={styles['header__nav-main-link']}>Новости и мероприятия</Link>
                            <Link href="#!" className={styles['header__nav-main-link']}>Магазины</Link>
                        </div>
                        <div className={styles['header__nav-menu-list']}>
                            <div className={styles['header__nav-heading']}>Информация</div>
                            <Link href="#!" className={styles['header__nav-main-link']}>Контакты</Link>
                            <Link href="#!" className={styles['header__nav-main-link']}>Контакты</Link>
                            <Link href="#!" className={styles['header__nav-main-link']}>Контакты</Link>
                            <Link href="#!" className={styles['header__nav-main-link']}>Контакты</Link>
                            <Link href="#!" className={styles['header__nav-main-link']}>Контакты</Link>
                        </div>
                        <div className={styles['header__nav-working-time']}>
                            <div className={styles['header__nav-heading']}>Время работы</div>
                            <div className={styles['header__nav-working-time-wrapper']}>
                                <div className={styles['header__nav-working-time-block']}>
                                    <div className={styles['header__nav-working-time-heading']}>Галерея</div>
                                    <div className={styles['header__nav-working-time-data']}>{WORKING_TIME_GALLERY.days}</div>
                                    <div className={styles['header__nav-working-time-data']}>{WORKING_TIME_GALLERY.hours}</div>
                                </div>
                                <div className={styles['header__nav-working-time-block']}>
                                    <div className={styles['header__nav-working-time-heading']}>Кинотеатр</div>
                                    <div className={styles['header__nav-working-time-data']}>{WORKING_TIME_CINEMA.days}</div>
                                    <div className={styles['header__nav-working-time-data']}>{WORKING_TIME_CINEMA.hours}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
