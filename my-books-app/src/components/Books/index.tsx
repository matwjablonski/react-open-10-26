import { useEffect, useReducer, useRef, useState } from "react";
import type { Book } from "../../types/book"
import { Book as BookItem } from "../Book";

type BooksProps = {
    data: Book[];
}

type DeleteBookActionType = 'book/delete';
type AddBookActionType = 'book/add';
type ReadBookActionType = 'book/read';

type DeleteBookAction = {
    type: DeleteBookActionType,
    payload: {
        id: string;
    }
}

type ReadBookAction = {
    type: ReadBookActionType,
    payload: {
        id: string;
    }
}

type AddBookAction = {
    type: AddBookActionType,
    payload: {
        id: string;
    }
};

type BookAction = DeleteBookAction | AddBookAction | ReadBookAction;

const bookReducer = (state: Book[], action: BookAction) => {
    switch (action.type) {
        case 'book/delete':
            return state.filter((book) => book.id !== action.payload.id)
        case 'book/read':
            return state.map((book) => {
                if (book.id === action.payload.id) {
                    return { ...book, read: !book.read }
                }
                return book;
            })
        case 'book/add':
        default: 
            return state;
    }
}

export const Books = ({ data }: BooksProps) => {
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

    const handleReadBook = (id: string) => {
        dispatch({
            type: 'book/read',
            payload: {
                id,
            }
        })
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
                        setReadBook={handleReadBook} 
                        handleRemoveBook={handleDeleteBook}
                        wasRead={book.read}
                        {...book}
                    />
                ))}
            </ul>
        </div>
    )
}