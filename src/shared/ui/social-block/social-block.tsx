import Link from "next/link";
import type { JSX } from "react";

import styles from './styles.module.scss';

export function SocialBlock(): JSX.Element {
    return (
        <div className={`${styles['social-block']}`}>
            <Link href="#!" className={`${styles['social-block__link']}`}>
                <img src="/images/icons/vkontakte.png" alt="Vkontakte"/>
            </Link>
            <Link href="#!" className={`${styles['social-block__link']}`}>
                <img src="/images/icons/telegram.png" alt="Telegram"/>
            </Link>
        </div>
    )
}
