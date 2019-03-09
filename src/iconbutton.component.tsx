import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Button } from 'grommet'

import { getColor, getDefaultTransition } from './provider.component'

export interface Props {
  title?: string,
  icon: IconDefinition,
  size?: number,
  color?: string,
  backgroundColor?: string,
  onClick: Function,
  className?: string
}

export class IconButton extends React.Component<Props> {
  public render() {

    return (
      <StyledButton
        className={this.props.className}
        title={this.props.title}
        size={this.props.size}
        a11yTitle={this.props.title}
        plain
        onClick={() => this.props.onClick() } 
        >
        {<Icon icon={this.props.icon}/>}
      </StyledButton>
    )
  }
}

const StyledButton = styled(Button) `

  color: ${props => props.color ? props.color : '#fff' };
  background-color: ${props => props.backgroundColor ? props.backgroundColor : getColor('brandGreen') };
  font-size: ${props => props.size ? props.size+'rem' : '1rem' };

  display: block;
  border-radius: 5em;
  width: 2.5em;
  height: 2.5em;
  padding-top: .08em;
  padding-left: .5em;
  transition: ${ getDefaultTransition() };

  &:hover {
    background-color: ${ getColor('brand') }
  }
` as typeof Button

const Icon = styled(FontAwesomeIcon) `
  width: 1.5em !important;
  height: 1.5em !important;
` as typeof FontAwesomeIcon