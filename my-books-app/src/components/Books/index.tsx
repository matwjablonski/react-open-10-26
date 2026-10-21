import type { Book } from "../../types"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
}

export const Books = ({ data }: BooksProps) => {
    return (
        <div>
            <h2>Lista książek</h2>
            <ul>
                {(data).map((book) => <BookItem key={book.id} {...book} />)}
            </ul>
        </div>
    )
}