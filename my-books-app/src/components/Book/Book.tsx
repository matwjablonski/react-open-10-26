import type { BookProps } from "./Book.types";

export function Book(props: BookProps) {
    const { title, author, publicationDate } = props;

    const clickHandler = () => {
        
    }

    return (
        <>
            <h3>{title} - {author}</h3>
            <p>{publicationDate}</p>
            <button onClick={clickHandler}>Kliknij mnie</button>
        </>
    )
}