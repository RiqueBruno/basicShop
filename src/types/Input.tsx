import { ComponentProps } from "react"

export type InputProps = ComponentProps<'input'> & {
    label?: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};