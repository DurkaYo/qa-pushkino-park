import React from "react";
import type { JSX } from "react";

import styles from './styles.module.scss';

export function Container({ children }: Readonly<{ children: React.ReactNode }>) : JSX.Element {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}
