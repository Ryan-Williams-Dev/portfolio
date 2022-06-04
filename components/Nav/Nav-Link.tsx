import { Link } from "@chakra-ui/react"

export default function NavLink(props) {
  return (
    <Link 
      href={`/${props.text}`}
      marginInline='2'
      textAlign='center'
    >
      {props.text}
    </Link>
  )
}
