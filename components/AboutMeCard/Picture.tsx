import { Box, Image } from "@chakra-ui/react";

export default function Picture() {
  return (
    <Box boxSize='2xl' >
      <Image 
        borderTopRightRadius='25%' 
        borderBottomLeftRadius='25%' 
        alt='Ryan WIlliams' 
        src="images/Me-main-cropped.png" 
      />
    </Box>

  )
}
