import Link from "next/link";
import { Text, useColorModeValue, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RiComputerLine } from "react-icons/ri"

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

  return (
    <>
      <Link href='/' >
        <a>
          <LogoBox  >
            <Icon as={RiComputerLine} 
              color='primary.bright'
              fontSize='2xl'
              />
            <Text
              color='primary.bright'
              fontWeight='bold'
              fontSize='2xl'
              ml={4}
            >
              Ryan Williams
            </Text>
          </LogoBox>
        </a>
      </Link>
      
    </>
  )
}

export default Logo