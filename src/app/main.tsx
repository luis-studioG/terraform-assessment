import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/api/react-query/query/queryClient';

import App from './App';

import '../assets/styles/index.css';

const container = document.getElementById('root');

// create a root
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

const MainComponent = (
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

//render app to root
root.render(<StrictMode>{MainComponent}</StrictMode>);
