import { useEffect, useRef, useState } from "react";
import type { Book } from "../../types/book"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
    setReadBook: (id: string) => void;
    checkIfWasRead: (id: string) => boolean;
}

export const Books = ({ data, setReadBook, checkIfWasRead }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [currentHeight, setCurrentHeight] = useState<number | null>(null);

    useEffect(() => {
        if (listRef.current) {
            const { height } = listRef.current.getBoundingClientRect();
            if (currentHeight !== height) {
                setCurrentHeight(height);
            }
        }
    });

    const displayMessage = () => {
        if (!currentHeight) {
            return null;
        }

        if (currentHeight > 500) {
            return <p>Masz dużo.</p>
        }

        return <p>Zbieraj dalej.</p>
    }

    return (
        <div>
            <h2>Lista książek</h2>
            {displayMessage()}
            <ul ref={listRef}>
                {(data).map((book) => (
                    <BookItem
                        key={book.id} 
                        setReadBook={setReadBook} 
                        wasRead={checkIfWasRead(book.id)}
                        {...book}
                    />
                ))}
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