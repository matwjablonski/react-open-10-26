import { useState } from "react";
import type { BookProps } from "./Book.types";

export function Book(props: BookProps) {
    const { title, author, publicationDate, id, wasRead, setReadBook } = props;

    const [votes, setVotes] = useState(() => Math.floor(author.length * 2 / 5));

    const clickHandler = () => {
        setReadBook(id)
    }

    const btnLabel = wasRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'

    const handleAddVote = () => {
        setVotes(v => v + 1);
    }

    return (
        <>
            <p>Na tę pozycję oddano: {votes} głosów</p>
            <h3>{title} - {author}</h3>
            <p>{publicationDate}</p>
            <button onClick={clickHandler}>{btnLabel}</button>
            <button onClick={handleAddVote}>Głosuj na tę pozycję</button>
        </>
    )
}