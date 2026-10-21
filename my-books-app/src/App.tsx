import { useState } from 'react';
import { Books } from './components/Books';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data/books.json';

function App() {
  const [ count, setCount ] = useState() // [State, StateHandler]


  return (
    <main>
      <Header name="Romku" />
      <Books data={data} />
      <Footer />
    </main>
  )
}

export default App
