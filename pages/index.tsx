import { Box, Flex, Heading, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Logo from '../components/Nav/Logo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'

const Home: NextPage = () => {

  const pageHeight = 'calc(100vh - 64px)';

  return (
    <Box 
      className='.parallax' 
      backgroundImage='images/me-wide.jpeg'
      minH='100vh' 
      backgroundAttachment='fixed' 
      backgroundPosition='47.5% 50%'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      display='flex'
      justifyContent='center'
    >
      <Nav />
      <Flex direction='column' >
        <Flex 
          height='100%'
          alignItems='center'
          justifyContent='center' 
          backgroundSize='cover'
          direction='column'
        >
          <Flex direction='row' height='100vh' width='90vw' mb={10} justifyContent='space-between' alignItems='center'>
            <Box>
              <Heading 
                size='4xl' 
                textAlign='center' 
                margin={6} 
                color='mono.black'
              >
                Ryan Williams
              </Heading>

              <Heading 
                size='2xl' 
                textAlign='center' 
                margin={6} 
                color='mono.black'
              >
                {'<Full Stack Developer />'}
              </Heading>

            </Box>
            <Box>
            <Heading 
                size='4xl' 
                textAlign='center' 
                margin={6} 
                color='mono.black'
              >
                Ryan Williams
              </Heading>

              <Heading 
                size='2xl' 
                textAlign='center' 
                margin={6} 
                color='mono.black'
              >
                {'<Full Stack Developer />'}
              </Heading>
            </Box>

          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
