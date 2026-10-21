import Header from './components/Header';
import data from './data/books.json';

type Book = {
  id: string;
  title: string;
  publicationDate: string;
  author: string;
}

function App() {
  return (
    <main>
      <Header name="Romku" />
      <h2>Lista książek</h2>
      <ul>
        {(data as Book[]).map((book) => <li key={book.id}>
          <div>
            <h3>{book.title} - {book.author}</h3>
            <p>{book.publicationDate}</p>
          </div>
        </li>)}
      </ul>
      <footer>
        Aplikacja przygotowana przez Mateusz Jabłoński
      </footer>
    </main>
  )
}

export default App
