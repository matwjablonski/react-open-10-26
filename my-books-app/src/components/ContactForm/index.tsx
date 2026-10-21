import { useState, type ChangeEvent } from "react"
import { Form } from "../Form";

export const ContactForm = () => {
    const [name, setName] = useState('');
    return (
        <Form>
            <input value={name} placeholder="Imię" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.currentTarget.value)
            }}/>
        </Form>
    )
}