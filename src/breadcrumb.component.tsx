import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button.component'
import { getColor, lightenColor } from './provider.component'
import Breakpoint from 'react-socks'
import { Anchor } from 'grommet'

//TODO: Define Props when data structure from athene is clear

export function Breadcrumb({ className, title }) {
  return (
    <div style={{ minHeight: '2rem' }}>
      <Breakpoint sm down>
        <StyledButton
          label={'Übersicht Prozentrechnung'}
          className={className}
          a11yTitle={title}
          plain
          iconName={'faArrowCircleLeft'}
          size={1}
          backgroundColor={lightenColor('lighterblue', 0.18)}
          fontColor={getColor('brand')}
          activeBackgroundColor={getColor('brand')}
        />
      </Breakpoint>
      <Breakpoint md up>
        <BreadcrumbList>
          <StyledAnchor href="#">Mathematik </StyledAnchor> >&nbsp;
          <StyledAnchor href="#">Terme und Gleichungen</StyledAnchor> >&nbsp;
          <StyledAnchor href="#">Terme und Variablen</StyledAnchor> >&nbsp;
          <StyledAnchor href="#">
            Zusammenfassen, Ausmultiplizieren, Faktorisieren
          </StyledAnchor>
        </BreadcrumbList>
      </Breakpoint>
    </div>
  )
}

const BreadcrumbList = styled.div`
  position: absolute;
  left: 2rem;
  margin-top: -1.5rem;
  font-size: 1rem;
  color: #ddd;
`

const StyledAnchor = styled(Anchor)`
  color: ${getColor('brand')};
  font-weight: normal;
` as typeof Anchor

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 0;
  font-weight: bold;
` as typeof Button
