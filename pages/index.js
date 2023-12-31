import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/MainPage'
import Header from '../components/Header'
import { Box } from '@chakra-ui/react'
import FavItem from '../components/FavItem'

export default function Home() {
  return (
    <>
      <Box pt={'5px'} px={'12%'}>
        <Header />
        <FavItem />
        <MainPage />
      </Box>
    </>
  )
}
