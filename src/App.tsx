import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from '@router/AppRouter.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '@/chakraTheme.ts';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <AppRouter />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
