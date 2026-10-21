import data from './data/books.json';

function App() {
  return (
    <main>
      
      <h1>Witaj w mojej aplikacji</h1>
      <ul>
        {data.map((book) => <li>{book.title}</li>)}
      </ul>
    </main>
  )
}

export default App
