import type { Book } from "../../types";

export type BookProps = Pick<Book, 'author' | 'title' | 'publicationDate'>

export type A = string;
export type B = string;