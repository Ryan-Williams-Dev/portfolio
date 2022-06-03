import '../styles/globals.css'
import '../styles/scrolling.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/extendedTheme'
import { Fonts } from '../styles/Fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
