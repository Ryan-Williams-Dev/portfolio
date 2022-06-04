import { Box, Button, Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Logo from "./Logo";
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Link from "next/link";
import NavLink from "./Nav-Link";

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
      // bg={useColorModeValue('teal.50', 'mono.black')}
      bg='transparent'
      style={{backdropFilter: 'blur(10px)'}}
      zIndex={1}
      justifyContent='space-between'
      alignItems='center'
      borderBottom='1px'
      borderBottomColor={useColorModeValue('mono.black', 'teal.50')}
      blur='10px'
    >
      <Box as="span">
        <Logo/>
        <NavLink text="About" />
        <NavLink text="Projects" />
        <NavLink text="Experience" />
        <NavLink text="Education" />
        <NavLink text="Contact" />
      </Box>


    
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
