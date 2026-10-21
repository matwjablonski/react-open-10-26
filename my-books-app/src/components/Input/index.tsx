import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

export const Input = ({ label, name, ...rest }: InputProps) => {

    return <label htmlFor={name}>
        <span>{label}</span>
        <input name={name} {...rest} />
    </label>
}

