import { useState } from 'react';
import { Books } from './components/Books';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data/books.json';

function App() {
  const [ readBooksIds, setReadBooksIds ] = useState<string[]>([]);
  
  const setReadBook = (id: string) => {
    setReadBooksIds((ids) => {
      if (readBooksIds.includes(id)) {
        return ids.filter(i => i !== id);
      }
      return [...ids, id];
    })
  }

  const checkIfWasRead = (id: string): boolean => {
    return readBooksIds.includes(id);
  }

  return (
    <main>
      <Header name="Romku" />
      <Books 
        data={data}
        setReadBook={setReadBook}
        checkIfWasRead={checkIfWasRead}
      />
      <Footer />
    </main>
  )
}

export default App
