import { Box, Button, Flex, Icon, IconButton, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Logo from "./Logo";
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Link from "next/link";
import NavLink from "./NavLink";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Nav() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      display='flex'
      position='fixed'
      height='64px'
      top={0}
      as='nav'
      w='90%'
      bg='transparent'
      zIndex={1}
      justifyContent='space-between'
      alignItems='center'
    >
      <Flex as='span' alignItems='center' >
        <Logo/>
        {/* <NavLink text="About" />
        <NavLink text="Projects" />
        <NavLink text="Experience" />
        <NavLink text="Education" />
        <NavLink text="Contact" /> */}
      </Flex>

      
      <Flex as='span' alignItems='center' >
        <Text color='primary.bright' fontSize='large' >Menu</Text>
        <IconButton variant='ghost' icon={<HamburgerIcon/>} aria-label="Menu Button" ml={4} fontSize='3xl' color='primary.bright'/>
      </Flex>

      {/* <IconButton icon={useColorModeValue(<MdDarkMode/>, <MdLightMode/>)} 
        aria-label='Toggle Light/Dark Mode'
        variant='ghost'
        onClick={toggleColorMode}
        m='4'
        fontSize='3xl'
        color={useColorModeValue('mono.black', 'primary.bright')}
      /> */}
    </Box>
  )
}
