import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from '@router/AppRouter.tsx';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
