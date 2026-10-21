import type { Book } from "../../types";

export type BookProps = Book & {
    setReadBook: (id: string) => void,
    wasRead: boolean;
}

export type A = string;
export type B = string;