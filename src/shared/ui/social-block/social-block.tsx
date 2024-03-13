import Link from "next/link";
import type { JSX } from "react";

import styles from './styles.module.scss';

export function SocialBlock(): JSX.Element {
    return (
        <>
            <Link
                href="https://vk.com/"
                className={`${styles['social-link']}`}
                target='_blank'
            >
                <img src="/images/icons/vkontakte.png" alt="Vkontakte"/>
            </Link>
            <Link
                href="https://telegram.org/"
                className={`${styles['social-link']}`}
                target='_blank'
            >
                <img src="/images/icons/telegram.png" alt="Telegram"/>
            </Link>
        </>
    )
}
