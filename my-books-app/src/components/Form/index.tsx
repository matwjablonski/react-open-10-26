import type { SubmitEvent, PropsWithChildren } from "react"

type FormProps = {
    onSubmit: () => void; 
};

export const Form = ({ children, onSubmit }: PropsWithChildren<FormProps>) => {
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        onSubmit();
    }

    return <form onSubmit={handleSubmit}>
        {children}
    </form>
}