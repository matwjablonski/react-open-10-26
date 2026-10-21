import type { BookProps } from "./Book.types";

export function Book(props: BookProps) {
    const { title, author, publicationDate, id, wasRead, setReadBook } = props;

    const clickHandler = () => {
        setReadBook(id)
    }

    const btnLabel = wasRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'

    return (
        <>
            <h3>{title} - {author}</h3>
            <p>{publicationDate}</p>
            <button onClick={clickHandler}>{btnLabel}</button>
        </>
    )
}