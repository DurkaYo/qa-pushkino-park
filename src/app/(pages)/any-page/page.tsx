import type {JSX} from "react";

import styles from './styles.module.scss';

import {UISection} from "@/shared/ui/section";

export default function AnyPage(): JSX.Element {
    return (
        <UISection defaultClass={styles['section-block']}>
            <div style={{height: '150vh'}}>
                ANY PAGE
            </div>
        </UISection>
    );
}
