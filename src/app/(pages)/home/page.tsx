import type {JSX} from "react";

import styles from './styles.module.scss';

import {UISection} from "/shared/ui/section";
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
            <ButtonFull isDisabled={false}>ButtonFull</ButtonFull>
            <br/><br/>
            <ButtonFull isDisabled={true}>ButtonFull</ButtonFull>
            <br/><br/>
            <ButtonTransparent isDisabled={false}>ButtonTransparent</ButtonTransparent>
            <br/><br/>
            <ButtonTransparent isDisabled={true}>ButtonTransparent</ButtonTransparent>
            <br/><br/>
            <ButtonCircleFull isDisabled={false} isRevers={true} />
            <ButtonCircleFull isDisabled={false} isRevers={false} />
            <br/><br/>
            <ButtonCircleFull isDisabled={true} isRevers={true} />
            <ButtonCircleFull isDisabled={true} isRevers={false} />
            <br/><br/>
            <ButtonCircleTransparentBlack isDisabled={false} isRevers={true} />
            <ButtonCircleTransparentBlack isDisabled={false} isRevers={false} />
            <br/><br/>
            <ButtonCircleTransparentBlack isDisabled={true} isRevers={true} />
            <ButtonCircleTransparentBlack isDisabled={true} isRevers={false} />
            <br/><br/>
            <ButtonCircleTransparentWhite isDisabled={false} isRevers={true} />
            <ButtonCircleTransparentWhite isDisabled={false} isRevers={false} />
            <br />
            <br />
            <ButtonCircleTransparentWhite isDisabled={true} isRevers={true} />
            <ButtonCircleTransparentWhite isDisabled={true} isRevers={false} />
        </UISection>
    );
}
