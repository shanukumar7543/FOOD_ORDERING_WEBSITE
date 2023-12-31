'use client'
import { Providers } from '@/lib/providers'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ChakraProvider>
  )
}
