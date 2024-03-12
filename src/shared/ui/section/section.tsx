import type {JSX} from "react";

import type {SectionProps} from "@/shared/ui/section/config";

export function Section({defaultClass, children}: SectionProps): JSX.Element {
    return (
        <section className={defaultClass}>
            <div className={`${defaultClass}__container`}>
                {children}
            </div>
        </section>
    )
}
