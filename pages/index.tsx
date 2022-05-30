import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center' >
      <Flex direction='column' backgroundColor='gray.100' rounded={6} >
        <Heading margin={6} >Hello, Welcome to the homepage of <strong>Ryan Williams</strong></Heading>
      </Flex>
    </Flex>
  )
}

export default Home
