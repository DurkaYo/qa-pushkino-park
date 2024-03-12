import { JSX } from "react";

import {SvgIconProps} from "@/shared/ui/svg-icon/config";

export function SvgIcon({id, color}: SvgIconProps): JSX.Element {
    return (
        <svg className="svg-icon" fill={color}>
            <use xlinkHref={`/images/icons/sprite.svg#${id}`}></use>
        </svg>
    )
}
