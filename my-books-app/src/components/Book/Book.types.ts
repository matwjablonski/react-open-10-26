import type { Book } from "../../types/book";

export type BookProps = Book & {
    setReadBook: (id: string) => void,
    handleRemoveBook: (id: string) => void;
    wasRead: boolean;
}
