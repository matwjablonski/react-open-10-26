import type { InputHTMLAttributes, Ref } from "react"
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string, ref?: Ref<HTMLInputElement> };

export const Input = ({ label, name, ref, ...rest }: InputProps) => {

    return <label htmlFor={name}>
        <span>{label}</span>
        <input name={name} {...rest} ref={ref} className={styles.input} />
    </label>
}
