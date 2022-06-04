import { Box, Flex, Heading, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Logo from '../components/Nav/Logo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Picture from '../components/AboutMeCard/Picture'

const Home: NextPage = () => {

  const pageHeight = 'calc(100vh - 64px)';
  const [isPortrait] = useMediaQuery('(orientation: portrait)')

  return (
    <>
      <Box 
        className='.parallax' 
        backgroundImage={isPortrait ? 'images/me-main-cropped.png' : 'images/me-wide.jpeg'}
        minH='100vh' 
        backgroundAttachment='fixed' 
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      ></Box>

      <Nav />
      <Flex direction='column' >
        <Flex 
          height='100%'
          alignItems='center'
          justifyContent='center' 
          
          backgroundSize='cover'
          direction='column'
        >
          <Flex direction='row' width='100vw' mb={10} justifyContent='space-evenly' alignItems='center'>
            <Box>
              <Heading 
                size='4xl' 
                textAlign='center' 
                margin={6} 
                color={useColorModeValue('mono.black', 'primary.bright')}
              >
                Ryan Williams
              </Heading>

              <Heading 
                size='2xl' 
                textAlign='center' 
                margin={6} 
                color={useColorModeValue('mono.black', 'primary.bright')} 
              >
                {'<Full Stack Developer />'}
              </Heading>

            </Box>
            {/* <Picture /> */}
          </Flex>
        </Flex>
        {/* <Flex 
          height='100vh' 
          backgroundColor={useColorModeValue('white', 'teal.900')} 
          justifyContent='center' 
          alignItems='center'
        >
          <Heading 
            size='3xl' 
            textAlign='center' 
            margin={6} 
            color={useColorModeValue('mono.black', 'primary.bright')}
          >
            My Work
          </Heading>
        </Flex> */}
      </Flex>
    </>
  )
}

export default Home
