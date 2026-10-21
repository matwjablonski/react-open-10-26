import { useEffect, useRef } from "react";
import type { Book } from "../../types/book"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
    setReadBook: (id: string) => void;
    checkIfWasRead: (id: string) => boolean;
}

export const Books = ({ data, setReadBook, checkIfWasRead }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.getBoundingClientRect();
        }
    });

    return (
        <div>
            <h2>Lista książek</h2>
            
            <ul ref={listRef}>
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