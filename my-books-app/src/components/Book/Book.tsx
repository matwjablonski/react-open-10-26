// import { useState } from "react";
import type { BookProps } from "./Book.types";
import { Link } from "react-router";
import { addVote, selectVotesByBookId } from "../../slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export function Book(props: BookProps) {
    const { title, author, publicationDate, id, wasRead, setReadBook, handleRemoveBook } = props;

    // const [votes, setVotes] = useState(() => Math.floor(author.length * 2 / 5));

    const dispatch = useAppDispatch();
    const votes = useAppSelector((state) => selectVotesByBookId(state, id))

    const clickHandler = () => {
        setReadBook(id)
    }

    const btnLabel = wasRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'

    const handleAddVote = () => {
        // setVotes(v => v + 1);
        dispatch(addVote(id))
    }

    return (
        <>
            <p>Na tę pozycję oddano: {votes} głosów</p>
            <h3>{title} - {author}</h3>
            <p>{publicationDate}</p>
            <button onClick={clickHandler}>{btnLabel}</button>
            <button onClick={handleAddVote}>Głosuj na tę pozycję</button>
            <button onClick={() => handleRemoveBook(id)}>Usuń książkę</button>
            <Link to={`/books/${id}`}>Zobacz szczegoly</Link>
        </>
    )
}