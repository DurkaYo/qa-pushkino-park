import { JSX } from "react";

import styles from './styles.module.scss';

interface CheckboxProps {
    id: string,
    label?: string,
}

export function Checkbox({id, label = ''}: CheckboxProps): JSX.Element {
    return (
        <>
            <input
                type='checkbox'
                id={id}
                className={styles.checkbox}
            />
            <label htmlFor={id}>{label}</label>
        </>
    )
}
