import type {JSX} from "react";

import styles from './styles.module.scss';

import {UISection} from "/shared/ui/section";

import {Checkbox} from "/shared/ui/checkbox";

export default function HomePage(): JSX.Element {
    return (
        <UISection defaultClass={styles['section-block']}>
            <div style={{height: '150vh'}}>
                HOME PAGE
            </div>
        </UISection>
    );
}
