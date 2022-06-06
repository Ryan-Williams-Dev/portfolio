import { Box, Flex, Heading, useColorModeValue, useMediaQuery, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Logo from '../components/Nav/Logo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'

const Home: NextPage = () => {

  const pageHeight = 'calc(100vh - 64px)';
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  return (
    <>
    
    <Box 
      backgroundImage='images/me-wide.jpeg'
      minH='100vh'
      minW='100vw'
      backgroundAttachment='fixed'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      display='flex'
      justifyContent='center'
    >
      <Nav />
      <Flex direction='column' >
        <Flex 
          minH='100vh'
          minW='100vw'
          alignItems='center'
          justifyContent='center' 
          direction='column'
        >
          <Flex direction={isLargerThan1024 ? 'row' : 'column'} 
            height='100vh' 
            gap={isLargerThan1024 ? '30vw' : '0'}
            maxW='90vw' 
            justifyContent={isLargerThan1024 ? 'center' : 'space-between'} 
            alignItems='center'
          >
            <Box>
              <Heading 
                size={isLargerThan1024 ? '4xl' : '3xl'} 
                textAlign='center' 
                color='mono.black'
                pt={isLargerThan1024 ? 0 : '7vh'}
                animation='ease-in 5s'
              >
                Ryan Williams
              </Heading>
            </Box>
            <Box>
              <Heading 
                size='2xl' 
                textAlign='center' 
                color='mono.black'
                pb={isLargerThan1024 ? 0 : '5vh'}
              >
                Full Stack Developer
              </Heading>
            </Box>

          </Flex>
        </Flex>
        <Flex 
          minH='100vh'
          maxW='100vw'
          alignItems='center'
          justifyContent='center'
          backgroundColor='blackAlpha.700'
          direction='column'
        ></Flex>
      </Flex>
    </Box>
    </>
  )
}

export default Home
