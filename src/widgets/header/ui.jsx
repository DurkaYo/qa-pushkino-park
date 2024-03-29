'use client';

import Link from "next/link";
import {useState, useEffect, useRef} from "react";

import styles from './styles.module.scss';

import {SocialBlock} from "../../shared/ui/social-block";
import {SvgIcon} from "../../shared/ui/svg-icon";
import {Input} from "../../shared/ui/inputs";
import {
    MENU_LINKS,
    WORKING_TIME_GALLERY,
    WORKING_TIME_CINEMA,
    PHONE_NUMBER
} from "../../shared/config/constants";

export function Header() {
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
    const [activeIdHeadingMenu, setActiveIdHeadingMenu] = useState('');
    const [colorIconsSvg, setColorIconsSvg] = useState('white');
    const [iconBurgerMenu, setIconBurgerMenu] = useState('burger');

    const isBurgerMenuActiveRef = useRef(isBurgerMenuActive);
    const _setIsBurgerMenuActive = flag => {
        isBurgerMenuActiveRef.current = flag;
        setIsBurgerMenuActive(flag);
    }

    const isTypeOfWindowObject = typeof window === 'object';
    const headerLogo = isTypeOfWindowObject && document.querySelector('.js-header-logo img');
    const styleVariables = isTypeOfWindowObject && document.querySelector('.js-header').style;
    const styleVariableBlockForScroll = isTypeOfWindowObject && document.querySelector('.js-block-for-scroll').style;
    const isCurrentLocationPathMain = isTypeOfWindowObject && location.pathname === '/';

    useEffect(() => {
        if (isCurrentLocationPathMain) {
            scrollChangeHeaderForMainPage();
        } else {
            changeHeaderForInternalPage();
            scrollChangeHeaderForInternalPage();
        }
    }, []);

    useEffect(() => {
        showBurgerMenu();
    }, [isBurgerMenuActive]);

    function changeHeader(typeHeader) {
        if (typeHeader === 'white') {
            styleVariables.setProperty('--header-background-color', 'white');
            styleVariables.setProperty('--top-line-color', 'var(--color-black)');
            styleVariables.setProperty('--top-line-border-color', 'rgba(0, 0, 0, .3)');
            styleVariables.setProperty('--cta-background-color', 'var(--bg-cyan)');
            styleVariables.setProperty('--social-border-color', 'rgba(0, 0, 0, .3)');

            headerLogo && headerLogo.setAttribute('src', '/images/main-logo/black.png');

            setColorIconsSvg('black');
        } else if (typeHeader === 'black') {
            styleVariables.setProperty('--header-background-color', 'linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0) 100%)');
            styleVariables.setProperty('--top-line-color', 'var(--color-white)');
            styleVariables.setProperty('--top-line-border-color', 'rgba(255, 255, 255, .3)');
            styleVariables.setProperty('--cta-background-color', 'transparent');
            styleVariables.setProperty('--social-border-color', 'transparent');

            headerLogo && headerLogo.setAttribute('src', '/images/main-logo/white.png');

            setColorIconsSvg('white');
        }
    }

    function scrollChangeHeaderForMainPage() {
        document.addEventListener('wheel', event => {
            if (!isBurgerMenuActiveRef.current) {
                if (scrollY < 5) {
                    styleVariables.setProperty('--display-cta', 'block');
                    changeHeader('black');
                } else if (scrollY > 0 && event.deltaY > 0) {
                    styleVariables.setProperty('--display-cta', 'none');
                    changeHeader('white');
                } else if (scrollY > 0 && event.deltaY < 0) {
                    styleVariables.setProperty('--display-cta', 'block');
                    changeHeader('white');
                }
            }
        });
    }

    function changeHeaderForInternalPage() {
        styleVariables.setProperty('--header-position', 'static');
        styleVariables.setProperty('--height-block-for-scroll', '0');
        changeHeader('white');
    }

    function scrollChangeHeaderForInternalPage() {
        document.addEventListener('wheel', event => {
            if (!isBurgerMenuActiveRef.current) {
                if (scrollY < 201) {
                    styleVariables.setProperty('--display-cta', 'block');
                    styleVariables.setProperty('--header-position', 'static');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-desk', '0');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-tab', '0');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-mob', '0');
                } else if (scrollY > 200) {
                    styleVariables.setProperty('--header-position', 'fixed');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-desk', '20.65rem');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-tab', '18.41rem');
                    styleVariableBlockForScroll.setProperty('--height-block-for-scroll-mob', '16.936rem');
                    event.deltaY > 0
                        ? styleVariables.setProperty('--display-cta', 'none')
                        : styleVariables.setProperty('--display-cta', 'block');
                }
            }
        });
    }

    function showBurgerMenu() {
        if (isBurgerMenuActive) {
            styleVariables.setProperty('--header-position', 'fixed');
            styleVariables.setProperty('--display-cta', 'block');
            changeHeader('white');
            setIconBurgerMenu('close');
            document.body.classList.add('body-hidden');
        } else {
            setIconBurgerMenu('burger');
            document.body.classList.remove('body-hidden');

            if (!isCurrentLocationPathMain && scrollY < 201) {
                styleVariables.setProperty('--header-position', 'static');
            } else if (isCurrentLocationPathMain && scrollY < 5) {
                changeHeader('black');
            }
        }
    }

    return (
        <>
            <div className={`${styles['block-for-scroll']} js-block-for-scroll`}></div>
            <header className={`${styles['header']} js-header`}>
                <div className={`${styles['header']}__container`}>
                    <div className={styles['header__top-line']}>
                        <div className={styles['header__top-line-wrap']}>
                            <a href='/' className={`${styles['header__logo']} js-header-logo`}>
                                <img src="/images/main-logo/white.png" alt="Логотип Пушкино Парк"/>
                            </a>
                            <div className={styles['header__working-time']}>
                                <SvgIcon id='clock' color={colorIconsSvg}/>
                                <span>{WORKING_TIME_GALLERY.hours}</span>
                            </div>
                        </div>
                        <div className={styles['header__top-line-wrap']}>
                            <div className={styles['header__phone-number']}>
                                <SvgIcon id='call' color={colorIconsSvg}/>
                                <span>{PHONE_NUMBER}</span>
                            </div>
                            <div className={styles['header__social-links']}>
                                <SocialBlock/>
                            </div>
                            <button className={styles['header__menu-btn']}
                                    onClick={() => _setIsBurgerMenuActive(!isBurgerMenuActive)}>
                                <span>Меню</span>
                                <SvgIcon id={iconBurgerMenu} color={colorIconsSvg}/>
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
                                <SvgIcon id='map' color='white'/>
                                <span>Карта ТРЦ</span>
                            </button>
                            <button className={styles['header__cta-btn']}>
                                <SvgIcon id='location' color='white'/>
                                <span>Как добраться?</span>
                            </button>
                        </div>
                    </div>

                    <nav className={`
                    ${styles['header__nav']}
                    ${isBurgerMenuActive ? styles['header__nav_active'] : ''}
                `}>
                        <div className={styles['header__nav-menu-list']}>
                            {
                                Object.keys(MENU_LINKS[0]).map(mainLink => (
                                    <div key={MENU_LINKS[0][mainLink].id}>
                                        <a
                                            href={MENU_LINKS[0][mainLink].link}
                                            className={`${styles['header__nav-main-link']} ${styles['header__nav-main-link_desk']}`}
                                        >
                                            {mainLink}
                                        </a>
                                        <div
                                            className={`
                                            ${styles['header__nav-heading']}
                                            ${styles['header__nav-heading_with-sub-links']}
                                            ${MENU_LINKS[0][mainLink].id === activeIdHeadingMenu ? styles['header__nav-heading_active'] : ''}
                                        `}
                                            onClick={() => setActiveIdHeadingMenu(MENU_LINKS[0][mainLink].id)}
                                        >
                                            <span>{mainLink}</span>
                                            <SvgIcon
                                                id="chevron"
                                                color={MENU_LINKS[0][mainLink].id === activeIdHeadingMenu ? '#3383a4' : '#000'}
                                            />
                                        </div>
                                        <div
                                            className={`
                                            ${styles['header__nav-sub-links']}
                                            ${MENU_LINKS[0][mainLink].id === activeIdHeadingMenu ? styles['header__nav-sub-links_active'] : ''}
                                        `}
                                        >
                                            {
                                                Object.keys(MENU_LINKS[0][mainLink].subItems).map((subItem, index) => (
                                                    <a
                                                        href={MENU_LINKS[0][mainLink].subItems[subItem]}
                                                        className={styles['header__nav-sub-link']}
                                                        key={index}
                                                    >
                                                        {subItem}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles['header__nav-wrapper']}>
                            <div className={styles['header__nav-menu-list']}>
                                <div className={styles['header__nav-heading']}>Новости</div>
                                {
                                    Object.keys(MENU_LINKS[1]).map(mainLink => (
                                        <a
                                            href={MENU_LINKS[1][mainLink].link}
                                            className={styles['header__nav-main-link']}
                                            key={MENU_LINKS[1][mainLink].id}
                                        >
                                            {mainLink}
                                        </a>
                                    ))
                                }
                            </div>
                            <div className={styles['header__nav-menu-list']}>
                                <div className={styles['header__nav-heading']}>Информация</div>
                                {
                                    Object.keys(MENU_LINKS[2]).map(mainLink => (
                                        <a
                                            href={MENU_LINKS[2][mainLink].link}
                                            className={styles['header__nav-main-link']}
                                            key={MENU_LINKS[2][mainLink].id}
                                        >
                                            {mainLink}
                                        </a>
                                    ))
                                }
                            </div>
                            <div className={styles['header__nav-working-time']}>
                                <div className={styles['header__nav-heading']}>Время работы</div>
                                <div className={styles['header__nav-working-time-wrapper']}>
                                    <div className={styles['header__nav-working-time-block']}>
                                        <div className={styles['header__nav-working-time-heading']}>Галерея</div>
                                        <div
                                            className={styles['header__nav-working-time-data']}>{WORKING_TIME_GALLERY.days}</div>
                                        <div
                                            className={styles['header__nav-working-time-data']}>{WORKING_TIME_GALLERY.hours}</div>
                                    </div>
                                    <div className={styles['header__nav-working-time-block']}>
                                        <div className={styles['header__nav-working-time-heading']}>Кинотеатр</div>
                                        <div
                                            className={styles['header__nav-working-time-data']}>{WORKING_TIME_CINEMA.days}</div>
                                        <div
                                            className={styles['header__nav-working-time-data']}>{WORKING_TIME_CINEMA.hours}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
