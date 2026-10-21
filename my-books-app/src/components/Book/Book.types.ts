import type { Book } from "../../types/book";

export type BookProps = Book & {
    setReadBook: (id: string) => void,
    wasRead: boolean;
}
