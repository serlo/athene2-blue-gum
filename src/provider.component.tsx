import { Grommet } from 'grommet'
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const LoadFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,600|Droid+Serif');
`

export function Provider({ children }: ProviderProps) {
  return (
    <Grommet theme={theme}>
      <LoadFont />
      {children}
    </Grommet>
  )
}

const theme = {
  global: {
    colors: {
      /**
       * Serlo blue
       *
       * Color of logo,
       * more important blue,
       * professional, reliable
       */
      brand: '#007ec1',
      footerBackground: '#f4fbff'
    },
    font: {
      family: '"Karmilla","Work Sans", sans-serif'
    },
    global: {
      breakpoints: {
        xsmall: {
          value: 500
        },
        small: {
          value: 900
        },
        medium: undefined,
        middle: {
          value: 3000
        }
      }
    }
  }
}

interface ProviderProps {
  children: React.ReactNode
}
