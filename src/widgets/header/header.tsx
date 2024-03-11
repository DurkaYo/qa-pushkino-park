'use client';

import {useState, useEffect} from "react";
import type {JSX} from "react";

import styles from './styles.module.scss';

import {SocialBlock} from "/shared/ui/social-block";
import {SvgIcon} from "/shared/ui/svg-icon";
import {Input} from "/shared/ui/inputs";

export function Header(): JSX.Element {
    const [colorIconSvg, setColorIconSvg] = useState('white');

    const styleVariables : CSSStyleDeclaration = document.documentElement.style;

    useEffect(() => {
        if (location.pathname === '/') {
            scrollChangeHeaderForMainPage();
        } else {
            changeHeaderForInternalPage();
            scrollChangeHeaderForInternalPage();
        }
    }, []);

    function changeHeader(typeHeader : string) {
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

                <div className={`${styles['header__top-line']}`}>
                    <div className={`${styles['header__top-line-wrap']} `}>
                        <div className={`${styles['header__logo']} js-header-logo`}>
                            <img src="/images/main-logo/white.png" alt="Логотип Пушкино Парк"/>
                        </div>
                        <div className={`${styles['header__working-time']}`}>
                            <SvgIcon id='clock' color={colorIconSvg} />
                            <span>10:00-22:00</span>
                        </div>
                    </div>
                    <div className={`${styles['header__top-line-wrap']}`}>
                        <div className={`${styles['header__phone-number']}`}>
                            <SvgIcon id='call' color={colorIconSvg} />
                            <span>+7 499 450-50-20</span>
                        </div>
                        <div className={`${styles['header__social-links']}`}>
                            <SocialBlock />
                        </div>
                        <button className={`${styles['header__menu-btn']}`}>
                            <span>Меню</span>
                            <SvgIcon id='burger' color={colorIconSvg} />
                        </button>
                    </div>
                </div>

                <div className={`${styles['header__cta']}`}>
                    <div className={`${styles['header__cta-wrapper']}`}>
                        <Input
                            attributes={
                                {
                                    type: 'text',
                                    placeholder: 'Поиск',
                                }
                            }
                            isInputTypeSearch={true}
                        />
                        <button className={`${styles['header__cta-btn']}`}>
                            <SvgIcon id='map' color='white' />
                            <span>Карта ТРЦ</span>
                        </button>
                        <button className={`${styles['header__cta-btn']}`}>
                            <SvgIcon id='location' color='white' />
                            <span>Как добраться?</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
