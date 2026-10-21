import type { Book } from "../../types"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
    setReadBook: (id: string) => void;
    checkIfWasRead: (id: string) => boolean;
}

export const Books = ({ data, setReadBook, checkIfWasRead }: BooksProps) => {
    return (
        <div>
            <h2>Lista książek</h2>
            <ul>
                {(data).map((book) => (
                    <BookItem
                        key={book.id} 
                        setReadBook={setReadBook} 
                        wasRead={checkIfWasRead(book.id)}
                        {...book}
                    />
                ))}
            </ul>
        </div>
    )
}