import styles from './styles.module.scss';

export function Checkbox({id, label = ''}) {
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
