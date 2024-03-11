import Link from "next/link";
import type { JSX } from "react";

import styles from './styles.module.scss';

export function SocialBlock(): JSX.Element {
    return (
        <>
            <Link href="#!" className={`${styles['social-link']}`}>
                <img src="/images/icons/vkontakte.png" alt="Vkontakte"/>
            </Link>
            <Link href="#!" className={`${styles['social-link']}`}>
                <img src="/images/icons/telegram.png" alt="Telegram"/>
            </Link>
        </>
    )
}
