import styles from './styles.module.scss';

export function Input({
  attributes,
  isInputTypeSearch = false,
}) {

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
