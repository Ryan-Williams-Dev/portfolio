import { Box, Button, Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Logo from "./Logo";
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Nav() {

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    toggleColorMode();
  }, [])

  return (
    <Box 
      display='flex'
      position='fixed'
      height='64px'
      top={0}
      as='nav'
      w='100%'
      bg={useColorModeValue('teal.50', 'mono.black')}
      style={{backdropFilter: 'blur(10px)'}}
      zIndex={1}
      justifyContent='space-between'
      alignItems='center'
      borderBottom='1px'
      borderBottomColor={useColorModeValue('mono.black', 'teal.50')}
    >
      <Logo/>


    
      <IconButton icon={useColorModeValue(<MdDarkMode/>, <MdLightMode/>)} 
        aria-label='Toggle Light/Dark Mode'
        variant='ghost'
        onClick={toggleColorMode}
        m='4'
        fontSize='3xl'
        color={useColorModeValue('mono.black', 'primary.bright')}
      />
    </Box>
  )
}
