// import { useState } from 'react';
// import { WindowTitleChanger } from './components/WindowTitleChanger';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { HomePage } from './pages/HomePage';
import ReadersPage from './pages/ReadersPage';
import { BooksPage } from './pages/BooksPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
  // const [ isTitleChanged, setIsTitleChanged ] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLoginLogout = () => {
    setIsAuthenticated(v => !v);
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} loginAction={handleLoginLogout} />}>
          <Route index element={<HomePage />} />
          <Route path="readers" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ReadersPage />
            </ProtectedRoute>
          } />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:id" element={<BookPage />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
      {/* <button onClick={() => { setIsTitleChanged(v => !v)}}>Zaktualizuj tytuł</button>
      {isTitleChanged && <WindowTitleChanger booksAmount={data.length} />} */}
    </main>
  )
}

export default App
