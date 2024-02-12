import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from '@router/AppRouter.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
