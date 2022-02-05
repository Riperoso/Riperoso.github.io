import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f7fafc',
        // ...
        900: '#171923',
      },
       bluetiful: '#3B60E4',
      // ...
    },
  });

ReactDOM.render(
  <ChakraProvider theme={theme} >
  <App />
</ChakraProvider>,
  document.getElementById('root')
)
