import type {JSX} from "react";

import styles from './styles.module.scss';

import {UISection} from "/shared/ui/section";

export default function HomePage(): JSX.Element {
    return (
        <UISection defaultClass={styles['section-block']}>
            <h1 className="h1 h1_caps">Home page НАХ</h1>
            <br/>
        </UISection>
    );
}
