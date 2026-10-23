import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import { UserProvider } from './components/UserProvider/index.tsx';
import { ThemeProvider } from './components/ThemeProvider/index.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
