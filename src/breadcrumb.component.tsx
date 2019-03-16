import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button.component'
import { getColor } from './provider.component'

import useWindowSize from '@rehooks/window-size'

import { Anchor } from 'grommet'


export function Breadcrumb( props ) {
  
  const windowSize = useWindowSize()
  const showFull = ( windowSize.innerWidth > 900 ) ? true : false;

  return (
      <div style={{minHeight:'2rem'}}>

        { (!showFull) ?
          <StyledButton
          label={"Übersicht Prozentrechnung"}
          className={props.className}
          a11yTitle={props.title}
          plain
          iconName={'arrow-circle-left'}
          
          backgroundColor={getColor('lighterblue')}
          activeBackgroundColor={getColor('brand')}
        />
          :
          <BreadcrumbList>
            <Anchor href="#">Mathematik </Anchor>
            &nbsp;>&nbsp;<Anchor href="#">Terme und Gleichungen</Anchor>
            &nbsp;>&nbsp;<Anchor href="#">Terme und Variablen</Anchor>
            &nbsp;>&nbsp;<Anchor href="#">Zusammenfassen, Ausmultiplizieren, Faktorisieren</Anchor>
          </BreadcrumbList>
        }
    </div>
  )
}

const BreadcrumbList = styled.div `
  position: absolute;
  left: 2rem;
  margin-top: -1rem;
  font-size: 1rem;
  color: #ddd;

  > a {
    color: ${ getColor('lighterblue') };
  }
`

const StyledButton = styled(Button) `
  margin-top: 2rem;
  margin-bottom: 0;
`