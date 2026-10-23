// import { useState } from 'react';
// import { WindowTitleChanger } from './components/WindowTitleChanger';
import { Route, Routes, useLocation } from 'react-router';
import Layout from './components/Layout';
// import { HomePage } from './pages/HomePage';
// import ReadersPage from './pages/ReadersPage';
// import { BooksPage } from './pages/BooksPage';
import { BookPage } from './pages/BookPage';
// import { ContactPage } from './pages/ContactPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const ReadersPage = lazy(() => import('./pages/ReadersPage'))
const BooksPage = lazy(() => import('./pages/BooksPage').then((module) => ({ default: module.BooksPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })))

function App() {
  const { pathname } = useLocation();
  // const [ isTitleChanged, setIsTitleChanged ] = useState(true);  

  return (
    <main>
      <Suspense fallback={<div>Trwa ładowanie</div>} key={pathname}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="readers" element={
              <ProtectedRoute>
                <ReadersPage />
              </ProtectedRoute>
            } />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:id" element={<BookPage />} />
            <Route path="contact-us" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <button onClick={() => { setIsTitleChanged(v => !v)}}>Zaktualizuj tytuł</button>
      {isTitleChanged && <WindowTitleChanger booksAmount={data.length} />} */}
    </main>
  )
}

export default App
