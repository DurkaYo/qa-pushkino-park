import { JSX } from "react";

import styles from './styles.module.scss';

import {Input} from "/shared/ui/inputs";
import {ButtonCircleTransparentWhite} from "/shared/ui/buttons";
import {Checkbox} from "/shared/ui/checkbox";

export function SubscribeEmail(): JSX.Element {
    return (
        <>
            <div className={styles['subscribe-email']}>
                <Input attributes={{type: 'text', placeholder: 'Электронная почта'}} width='100%' />
                <ButtonCircleTransparentWhite />
            </div>
            <Checkbox id='subscribe-email-approval' label='Даю согласие на обработку персональных данных' />
        </>
    )
}
