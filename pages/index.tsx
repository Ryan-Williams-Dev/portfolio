import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Logo from '../components/Nav/Logo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Picture from '../components/AboutMeCard/Picture'

const Home: NextPage = () => {

  const pageHeight = 'calc(100vh - 64px)';

  return (
    <div className='horizontal-scroll-wrapper'>
      <Flex
        height='100vh' 
        alignItems='center' 
        justifyContent='center' 
        backgroundColor={useColorModeValue('teal.50', 'mono.black')} 
        direction={'column'}
      >
        <Nav />
        <Flex direction='column' rounded={6} >
          <Flex direction='row' width='100vw' m={10} justifyContent='space-evenly' alignItems='center'>
            <Box>
              <Heading 
                size='3xl' 
                textAlign='center' 
                margin={6} 
                color={useColorModeValue('mono.black', 'primary.bright')}
              >
                Ryan Williams
              </Heading>

              <Heading 
                size='xl' 
                textAlign='center' 
                margin={6} 
                color={useColorModeValue('mono.black', 'primary.bright')} 
              >
                Full Stack Developer
              </Heading>

            </Box>
            <Picture />
          </Flex>
        </Flex>
      </Flex>
      <Flex height={pageHeight} backgroundColor={useColorModeValue('white', 'teal.900')} justifyContent='center' alignItems='center' >
        <Heading 
          size='3xl' 
          textAlign='center' 
          margin={6} 
          color={useColorModeValue('mono.black', 'primary.bright')}
        >
          My Work
        </Heading>
      </Flex>
    </div>
  )
}

export default Home
