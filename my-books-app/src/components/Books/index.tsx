import { useEffect, useReducer, useRef, useState } from "react";
import type { Book } from "../../types/book"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
    setReadBook: (id: string) => void;
    checkIfWasRead: (id: string) => boolean;
}

type DeleteBookAction = {
    type: 'book/delete',
    payload: {
        id: string;
    }
}

type AddBookAction = {
    type: 'book/add',
    payload: {
        id: string;
    }
};

type BookAction = DeleteBookAction | AddBookAction

const bookReducer = (state: Book[], action: BookAction) => {
    switch (action.type) {
        case 'book/delete':
            return state.filter((book) => book.id !== action.payload.id)
        case 'book/add':
        default: 
            return state;
    }
}

export const Books = ({ data, setReadBook, checkIfWasRead }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [currentHeight, setCurrentHeight] = useState<number | null>(null);

    const [booksState, dispatch] = useReducer(bookReducer, data);

    const handleDeleteBook = (id: string) => {
        dispatch({
            type: 'book/delete',
            payload: {
                id
            }
        });
    }

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
                {(booksState).map((book) => (
                    <BookItem
                        key={book.id} 
                        setReadBook={setReadBook} 
                        wasRead={checkIfWasRead(book.id)}
                        {...book}
                    />
                ))}
                {(booksState).map((book) => (
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