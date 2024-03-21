import Link from "next/link";

import styles from './styles.module.scss';

export function SocialBlock() {
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
