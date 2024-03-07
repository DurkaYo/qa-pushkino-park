import type {JSX} from "react";

import styles from './styles.module.scss';

import {UISection} from "/shared/ui/section";

import {Checkbox} from "/shared/ui/checkbox";

export default function HomePage(): JSX.Element {
    return (
        <UISection defaultClass={styles['section-block']}>
            <h1 className="h1 h1_caps">Home page НАХ</h1>
            <br/>
            <Checkbox id='email' label='согласен получать письма'/>
        </UISection>
    );
}
