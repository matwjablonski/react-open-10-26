import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import { UserProvider } from './components/UserProvider/index.tsx';
import { ThemeProvider } from './components/ThemeProvider/index.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </UserProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
