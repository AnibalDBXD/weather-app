import { ChakraProvider } from '@chakra-ui/react'
import { AppType } from 'next/app'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
