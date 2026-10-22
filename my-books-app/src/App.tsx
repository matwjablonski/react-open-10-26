import { useState } from 'react';
import { Books } from './components/Books';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data/books.json';
import { UserInfo } from './components/UserInfo';
import { WindowTitleChanger } from './components/WindowTitleChanger';

function App() {
  const [ isTitleChanged, setIsTitleChanged ] = useState(true);
  
  return (
    <main>
      <button onClick={() => { setIsTitleChanged(v => !v)}}>Zaktualizuj tytuł</button>
      <Header name="Romku">
        <UserInfo />
      </Header>
      <Books 
        data={data}
      />
      <Footer />
      {isTitleChanged && <WindowTitleChanger booksAmount={data.length} />}
    </main>
  )
}

export default App
