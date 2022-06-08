import { Button, Link, useColorModeValue } from "@chakra-ui/react"

export default function NavLink(props: any) {
  return (
    <Button variant='ghost'>
      <Link 
        href={`/${props.text}`}
        marginInline='2'
        textAlign='center'
        color={useColorModeValue('mono.black', 'teal.50')}
        mixBlendMode='darken'
      >
        {props.text}
      </Link>
    </Button>
  )
}
