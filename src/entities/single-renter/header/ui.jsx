import Link from "next/link";
import {UISection} from "../../../shared/ui/section";
import {ButtonTransparent} from "../../../shared/ui/buttons";

import styles from './styles.module.scss';

export function SingleRenterHeader() {
    return (
        <UISection defaultClass={styles['renter-header']}>
            <div className={styles['renter-header__wrapper']}>
                <div className={styles['renter-header__description']}>
                    <h1 className={`${styles['renter-header__heading']} h1 h1_caps`}>O’STIN</h1>
                    <div className={styles['renter-header__location']}>
                        <div className={styles['renter-header__floor']}>1 этаж</div>
                        <ButtonTransparent>Показать на карте</ButtonTransparent>
                    </div>
                    <div className={styles['renter-header__text']}>
                        O’STIN – международный бренд, один из ключевых в российском fashion-рынке. Ключевую часть коллекции составляет O’STIN Casual – базовый ассортимент на каждый день: стильная, удобная и практичная одежда. Кроме того, есть премиальное направление, а также джинсовая, молодежная и детская линии одежды.
                    </div>
                </div>

                <div className={styles['renter-header__right-side']}>
                    <div className={styles['renter-header__banner']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                        <div className={styles['renter-header__logo']}>
                            <img src="/images/temp_dev/single-renter/logo.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={styles['renter-header__links']}>
                        <Link href='#!'>Женская одежда</Link>
                        <Link href='#!'>Женская одежда</Link>
                        <Link href='#!'>Женская одежда</Link>
                    </div>
                </div>
            </div>
        </UISection>
    )
}
