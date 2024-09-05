import { ComponentProps } from "react";

export type buttonProps = ComponentProps<'button'> & {
    style?: object,
    text: string,
    onClick: () => void
}