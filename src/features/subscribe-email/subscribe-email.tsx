import { JSX } from "react";

import styles from './styles.module.scss';
import {BUTTONS} from "@/features/subscribe-email/config";
import type {SubscribeEmailProps} from "@/features/subscribe-email/config";

import {Input} from "@/shared/ui/inputs";
import {Checkbox} from "@/shared/ui/checkbox";

export function SubscribeEmail({button} : SubscribeEmailProps): JSX.Element {
    return (
        <>
            <div className={styles['subscribe-email']}>
                <Input attributes={{type: 'text', placeholder: 'Электронная почта'}} />
                {/*@ts-ignore*/}
                {BUTTONS[button]}
            </div>
            <Checkbox id='subscribe-email-approval' label='Даю согласие на обработку персональных данных' />
        </>
    )
}
