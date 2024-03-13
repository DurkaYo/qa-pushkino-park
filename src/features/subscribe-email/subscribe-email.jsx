import styles from './styles.module.scss';
import {BUTTONS} from "./config";

import {Input} from "../../shared/ui/inputs";
import {Checkbox} from "../../shared/ui/checkbox";

export function SubscribeEmail({button}) {
    return (
        <>
            <div className={styles['subscribe-email']}>
                <Input attributes={{type: 'text', placeholder: 'Электронная почта'}} />
                {BUTTONS[button]}
            </div>
            <Checkbox id='subscribe-email-approval' label='Даю согласие на обработку персональных данных' />
        </>
    )
}
