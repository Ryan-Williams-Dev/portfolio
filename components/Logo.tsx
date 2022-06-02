import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Icon, useColorMode, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RiComputerLine } from "react-icons/ri"
import { useEffect } from "react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImg = `/images/logo.png`
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    toggleColorMode();
  }, [])

  return (
    <>
      <Link href='/' >
        <a>
          <LogoBox>
            <Icon as={RiComputerLine} color={useColorModeValue('primary.bright', 'mono.black')}/>
            <Text
            color={useColorModeValue('primary.bright', 'mono.black')}
            fontWeight='bold'
            >
              Ryan Williams
            </Text>
          </LogoBox>
        </a>
      </Link>
      <Button onClick={toggleColorMode}>
        See {colorMode === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </>
  )
}

export default Logo