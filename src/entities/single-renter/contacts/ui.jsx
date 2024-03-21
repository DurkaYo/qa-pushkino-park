import Link from "next/link";
import {UISection} from "../../../shared/ui/section";
import {SocialBlock} from "../../../shared/ui/social-block";
import {SvgIcon} from "../../../shared/ui/svg-icon";

import styles from './styles.module.scss';

export function SingleRenterContacts() {
    return (
        <UISection defaultClass={styles['renter-contacts']}>
            <div className={styles['renter-contacts__wrapper']}>
                <div className={styles['renter-contacts__local']}>
                    <div className={styles['renter-contacts__item']}>
                        <SvgIcon id='clock' color='#3383a4'/>
                        <span>10:00-22:00</span>
                    </div>
                    <div className={styles['renter-contacts__item']}>
                        <SvgIcon id='browse' color='#3383a4'/>
                        <span>Сайт бренда</span>
                    </div>
                    <div className={styles['renter-contacts__item']}>
                        <SvgIcon id='call' color='#3383a4'/>
                        <span>+7 499 450-50-20</span>
                    </div>
                </div>
                <div className={styles['renter-contacts__social']}>
                    <SocialBlock/>
                </div>
            </div>
        </UISection>
    )
}
