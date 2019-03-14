import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Button } from 'grommet'

import { getColor, getDefaultTransition } from './provider.component'

export interface Props {
  title?: string,
  icon: IconDefinition,
  size?: (1.0 | 1.1 |1.2 | 1.33 | 1.5 | 1.75 | 2.0 | 2.33 | 2.5 | 3.0 ),
  active?: boolean,
  iconColor?: string,
  backgroundColor?: string,
  activeIconColor?: string,
  activeBackgroundColor?: string,
  onClick?: Function,
  className?: string
}

IconButton.defaultProps = {
  active: false,
  title: "",
  size: 1.0,
  backgroundColor: getColor('brandGreen'),
  activeBackgroundColor: getColor('brand'),
  activeIconColor: '#fff',
  iconColor: '#fff',
  onClick: () => {}
}

export function IconButton( props : Props) {
  return (
    <StyledButton
      className={props.className}
      title={props.title}
      size={props.size}
      a11yTitle={props.title}
      plain
      onClick={() => { if(props) props.onClick()} } 

      active={props.active}
      backgroundColor={props.backgroundColor}
      activeBackgroundColor={props.activeBackgroundColor}
      iconColor={props.iconColor}
      activeIconColor={props.activeIconColor}

      >
      {<Icon icon={props.icon}/>}
    </StyledButton>
  )
}

export const StyledButton = styled(Button)`

  font-size: ${props => props.size+'rem' };

  display: block;
  border-radius: 5em;
  width: 2.5em;
  height: 2.5em;
  padding-top: .08em;
  padding-left: .5em;
  transition: ${ getDefaultTransition() };

  color: ${ props => ( props.active && props.activeIconColor ) ? props.activeIconColor : props.iconColor };
  background-color: ${props => props.active ? props.activeBackgroundColor : props.backgroundColor };

  &:hover {
    background-color: ${props => !props.active ? props.activeBackgroundColor : props.backgroundColor };
  }
  
` as typeof Button

export const Icon = styled(FontAwesomeIcon) `
  width: 1.5em !important;
  height: 1.5em !important;
` as typeof FontAwesomeIcon