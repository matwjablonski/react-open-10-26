import type { PropsWithChildren } from "react"

type FormProps = {
    onSubmit?: () => void; 
};

export const Form = ({ children }: PropsWithChildren<FormProps>) => {
    return <form>
        {children}
    </form>
}