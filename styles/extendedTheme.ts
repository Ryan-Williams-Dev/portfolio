import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  useSystemColorMode: false,
}

const colors = {
  primary: {
    bright: '#66FCF1',
    muted: '#45A29E'
  },
  mono: {
    black: '#0B0C10',
    grey: '#1F2833',
    silver: '#C5C6C7'
  }
};

const fonts = {
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
}

const theme = extendTheme({ colors, config, fonts });

export default theme;