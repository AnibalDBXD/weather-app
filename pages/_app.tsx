import { ChakraProvider } from '@chakra-ui/react'
import { AppType } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
