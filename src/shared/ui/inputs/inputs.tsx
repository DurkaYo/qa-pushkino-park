import { JSX } from "react";

import styles from './styles.module.scss';

import type {InputProps} from './config';

export function Input({
  attributes,
  isInputTypeSearch = false,
}: InputProps): JSX.Element {

    return (
        <>
            <input
                {...attributes}
                className={`
                    ${styles.input}
                    ${isInputTypeSearch ? styles.input__search : ''}
                    input_custom-styles
                `}
            />
        </>
    )
}
