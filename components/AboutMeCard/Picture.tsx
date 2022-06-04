import { Box, Image, useColorModeValue } from "@chakra-ui/react";

export default function Picture() {
  
  return (
    <Box boxSize='2xl' >
      <Image 
        borderTopRightRadius='25%' 
        borderBottomLeftRadius='25%' 
        alt='Ryan WIlliams' 
        src="images/Me-main-cropped.png"
        boxShadow={useColorModeValue('dark-lg', '0px 5px 16px 0px rgba(140,140,140,0.3)')}
      />
    </Box>

  )
}
