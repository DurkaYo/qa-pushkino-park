import type { JSX } from "react";

import { UISection } from "/shared/ui/section";

export default function Loading(): JSX.Element {
    return (
        <UISection defaultClass='loading'>
            <div>Страница загружается</div>
        </UISection>
    )
}
