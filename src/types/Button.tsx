import { ComponentProps } from "react";

export type buttonProps = ComponentProps<'button'> & {
    text: string,
    onClick: () => void
}