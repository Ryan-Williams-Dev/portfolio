import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Logo from '../components/Nav/Logo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'

const Home: NextPage = () => {
  return (
    <Flex
      height='100vh' 
      alignItems='center' 
      justifyContent='center' 
      backgroundColor={useColorModeValue('mono.silver', 'mono.black')} 
      direction={'column'}
    >
      <Nav />
      <Flex direction='column' backgroundColor={useColorModeValue('mono.black', 'mono.silver')} rounded={6} >
        <Heading margin={6} color={useColorModeValue('mono.silver', 'mono.black')} >Hello, Welcome to the homepage of Ryan Williams</Heading>
      </Flex>
    </Flex>
  )
}

export default Home
