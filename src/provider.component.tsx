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
      brand: '#007ec1'
    },
    font: {
      family: '"Open Sans", sans-serif'
    }
  }
}

interface ProviderProps {
  children: React.ReactNode
}
