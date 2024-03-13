import Link from "next/link";

import styles from './styles.module.scss';
import {LINKS} from "./config";

import {UISection} from "../../../shared/ui/section";
import {SubscribeEmail} from "../../../features/subscribe-email";
import {SocialBlock} from "../../../shared/ui/social-block";

export function MainPageSubscribe() {
    return (
        <UISection defaultClass={styles['subscribe']}>
            <div className={styles['subscribe__links']}>
                {
                    LINKS.map(link => (
                        <Link
                            href={link.href}
                            className={styles['subscribe__link']}
                        >
                            {link.anchor}
                        </Link>
                    ))
                }
            </div>

            <div className={styles['subscribe__wrapper']}>
                <div className={styles['subscribe__subscribe-block']}>
                    <div className={styles['subscribe__heading']}>Много задач - одно решение</div>
                    <div className={styles['subscribe__subheading']}>Подписывайтесь</div>
                    <div className={styles['subscribe__input']}>
                        <SubscribeEmail button='ButtonCircleTransparentGray' />
                    </div>
                    <div className={styles['subscribe__social']}>
                        <SocialBlock />
                    </div>
                </div>
                <div className={styles['subscribe__image']}>
                    <picture>
                        <source srcSet="/images/main-page/subscribe/main-img-mobile.png" media="(max-width: 375px)"/>
                        <source srcSet="/images/main-page/subscribe/main-img-tablet.png" media="(max-width: 720px)"/>
                        <img src="/images/main-page/subscribe/main-img-desktop.png"
                             alt="Подписка на новости Пушкино Парк"/>
                    </picture>
                </div>
            </div>
        </UISection>
    )
}
