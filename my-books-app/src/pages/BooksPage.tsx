import { Books } from "../components/Books";
import { useApi } from "../hooks/useApi";
import type { Book } from "../types/book";

export const BooksPage = () => {
    const { data: books} = useApi<Book[]>('/books.json', 'public');

    return books && (
        <Books 
            data={books}
        />
    )
}