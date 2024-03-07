import React from "react";

export interface ButtonProps {
    children: React.ReactNode,
    isDisabled?: boolean,
    width?: string,
}

export interface ButtonCircleProps {
    isDisabled?: boolean,
    isRevers?: boolean,
}
