import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    bright: '#66FCF1',
    muted: '#45A29E'
  },
  mono: {
    black: '#0B0C10',
    grey: '#1F2833',
    silver: '#C5C6C7'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
