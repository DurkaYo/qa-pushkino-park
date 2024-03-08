import type {JSX} from "react";

import styles from './styles.module.scss';

import {SocialBlock} from "/shared/ui/social-block";

export function Header(): JSX.Element {
    return (
        <header className={styles['header']}>
            <div className={`${styles['header']}__container`}>

                <div className={`${styles['header__top-line']}`}>
                    <div className={`${styles['header__top-line-flex-wrap']}`}>
                        <div className={`${styles['header__logo']}`}>
                            <img src="/images/main-logo/white.png" alt="Логотип Пушкино Парк"/>
                        </div>
                        <div className={`${styles['header__working-time']}`}>
                            <svg className="svg-icon" viewBox="0 0 24 24" width="24" height="24">
                                <use href="/images/icons/sprite.svg#clock" x="0" y="0"></use>
                            </svg>
                            10:00-22:00
                        </div>
                    </div>
                    <div className={`${styles['header__top-line-flex-wrap']}`}>
                        <div className={`${styles['header__phone-number']}`}>
                            <svg className="svg-icon" viewBox="0 0 24 24" width="24" height="24">
                                <use href="/images/icons/sprite.svg#call" x="0" y="0"></use>
                            </svg>
                            +7 499 450-50-20
                        </div>
                        <SocialBlock/>
                        <button className={`${styles['header__menu-btn']}`}>
                            Меню
                            <svg className="svg-icon" viewBox="0 0 24 24" width="24" height="24">
                                <use href="/images/icons/sprite.svg#burger" x="0" y="0"></use>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${styles['header__cta']}`}></div>
            </div>
        </header>
    )
}
