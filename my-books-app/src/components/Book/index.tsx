import type { BookProps } from "./Book.types";

function Book(props: BookProps) {
    const { title, author, publicationDate } = props;

    return (
        <>
            <h3>{title} - {author}</h3>
            <p>{publicationDate}</p>
        </>
    )
}

export default Book;