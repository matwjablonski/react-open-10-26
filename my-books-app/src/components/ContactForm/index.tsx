import { useRef, useState, type ChangeEvent } from "react"
import { Form } from "../Form";
import { Input } from "../Input";
import Notification from "../Notification";

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
    const firstInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        console.log('dane do console', formValues);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues((v) => ({
            ...v,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSetFocus = () => {
        firstInputRef.current?.focus()
    }

    return (
        <div>
            <button onClick={handleSetFocus} style={{
                border: '2px solid red'
            }}>Napisz do nas</button>
            <Form onSubmit={handleSubmit}>
                <Input value={formValues.name} label="Imię" onChange={handleChange} name="name" ref={firstInputRef}/>
                <Input value={formValues.phoneNo} label="Numer telefonu" onChange={handleChange} name="phoneNo" />
                <textarea value={formValues.message} name="message" onChange={handleChange}/>
                <button type="submit">Wyślij</button>
            </Form>
            <Notification message="Ustawiono focus na pierwszej pozycji" active={true}/>
        </div>
    )
}