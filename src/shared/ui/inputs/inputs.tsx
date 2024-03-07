import { JSX } from "react";

import styles from './styles.module.scss';

import type {InputProps} from './config';

export function Input({
  attributes,
  inputTypeSearch = false,
  width,
}: InputProps): JSX.Element {
    return (
        <>
            <style>{`
                .input_custom-width {
                    width: ${width};
                }
            `}
            </style>

            <input
                {...attributes}
                className={`
                    ${styles.input}
                    ${inputTypeSearch ? styles.input__search : ''}
                    ${width ? 'input_custom-width' : ''}
                `}
            />
        </>
    )
}