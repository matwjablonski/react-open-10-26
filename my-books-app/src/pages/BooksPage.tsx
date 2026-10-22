import data from "../data/books.json";
import { Books } from "../components/Books";

export const BooksPage = () => (
    <Books 
        data={data}
    />
)