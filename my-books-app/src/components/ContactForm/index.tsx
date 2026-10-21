import { useState, type ChangeEvent } from "react"
import { Form } from "../Form";
import { Input } from "../Input";

type FormValues = {
    name: string;
    phoneNo: string;
    message: string;
}

export const ContactForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        phoneNo: '',
        message: '',
    });

    const handleSubmit = () => {
        console.log('dane do console', formValues);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues((v) => ({
            ...v,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={formValues.name} label="Imię" onChange={handleChange} name="name" />
            <Input value={formValues.phoneNo} label="Numer telefonu" onChange={handleChange} name="phoneNo" />
            <textarea value={formValues.message} name="message" onChange={handleChange}/>
            <button type="submit">Wyślij</button>
        </Form>
    )
}