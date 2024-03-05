import type { JSX } from "react";

import styles from './page-styles.module.scss';

import { UIContainer } from '/shared/ui/conteiner/index';

export default function Home(): JSX.Element {
    return (
        <UIContainer>
            <h1 className={ styles.h1 }>Home page НАХ</h1>
        </UIContainer>
    );
}
