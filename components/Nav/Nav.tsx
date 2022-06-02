import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Logo from "./Logo";

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
      bg={useColorModeValue('mono.silver', 'mono.black')}
      style={{backdropFilter: 'blur(10px)'}}
      zIndex={1}
      justifyContent='space-between'
    >
      <Logo/>
      <Button onClick={toggleColorMode}>
        See {colorMode === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </Box>
  )
}
