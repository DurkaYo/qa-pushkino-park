import type { JSX } from "react";

import styles from './styles.module.scss';

import { UISection } from "/shared/ui/section";
import {
    ButtonFull,
    ButtonTransparent,
    ButtonCircleFull,
    ButtonCircleTransparentWhite,
    ButtonCircleTransparentBlack
} from "/shared/ui/buttons";

export default function HomePage(): JSX.Element {
    return (
        <UISection defaultClass={styles['section-block']}>
            <h1 className="h1 h1_caps">Home page НАХ</h1>
            <br/>
            <ButtonFull isDisabled={ false }>ButtonFull</ButtonFull>
            <br/><br/>
            <ButtonFull isDisabled={ true }>ButtonFull</ButtonFull>
            <br/><br/>
            <ButtonTransparent isDisabled={ false }>ButtonTransparent</ButtonTransparent>
            <br/><br/>
            <ButtonTransparent isDisabled={ true }>ButtonTransparent</ButtonTransparent>
            <br/><br/>
            <ButtonCircleFull isDisabled={ false } />
            <br/><br/>
            <ButtonCircleFull isDisabled={ true } />
            <br/><br/>
            <ButtonCircleTransparentBlack isDisabled={ false } />
            <br/><br/>
            <ButtonCircleTransparentBlack isDisabled={ true } />
            <br/><br/>
            <ButtonCircleTransparentWhite isDisabled={ false } />
            <br />
            <br />
            <ButtonCircleTransparentWhite isDisabled={ true } />
        </UISection>
    );
}
