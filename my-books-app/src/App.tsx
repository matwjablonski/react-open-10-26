import { useState } from 'react';
import { Books } from './components/Books';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data/books.json';
import { UserInfo } from './components/UserInfo';
import { WindowTitleChanger } from './components/WindowTitleChanger';

function App() {
  const [ readBooksIds, setReadBooksIds ] = useState<string[]>([]);
  const [ isTitleChanged, setIsTitleChanged ] = useState(true);
  
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
      <button onClick={() => { setIsTitleChanged(v => !v)}}>Zaktualizuj tytuł</button>
      <Header name="Romku">
        <UserInfo />
      </Header>
      <Books 
        data={data}
        setReadBook={setReadBook}
        checkIfWasRead={checkIfWasRead}
      />
      <Footer />
      {isTitleChanged && <WindowTitleChanger booksAmount={data.length} />}
    </main>
  )
}

export default App
