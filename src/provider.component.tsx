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
  xs: '0rem',
  sm: '48rem',
  md: '64rem',
  lg: '75rem',
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 2, // rem
    outerMargin: 3, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  },
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
      footerBackground: '#f4fbff',
      lightblue: '#52a6d0',
      lighterblue: '#91c5e4',
      bluewhite: '#f0f7fb',
      helperblue: '#00b4d5',
      green: '#95bc1a'
    },
    font: {
      family: '"Karmilla","Work Sans", sans-serif'
    }
  }
}


export const GlobalStyle = createGlobalStyle`
  html  {
    font-size: 16px;
  }

  body {
    font-family: 'Karla';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing:-0.01em;
    -webkit-text-stroke: .6px;
  }


  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: 700;
  }

  @media (min-width: ${theme.flexboxgrid.breakpoints.md + 'rem'} ){
    html{
      font-size: 18px;
    }
  }

  @media (min-width: ${theme.flexboxgrid.breakpoints.lg + 'rem'}){
	html{
		font-size: 20px;
  }
  
	/*.container{
		max-width: 56rem !important;
		position: relative;
  }
  
	.wide-container{
		padding: 0 4rem;
	}*/
}
`

interface ProviderProps {
  children: React.ReactNode
}
