import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Button, ButtonProps } from 'grommet'

import { getColor, getDefaultTransition } from './provider.component'

export interface Props extends ButtonProps{
  // title?: string,
  // label?: string,
  iconDef: IconDefinition,
  size?: (1.0 | 1.1 |1.2 | 1.33 | 1.5 | 1.75 | 2.0 | 2.33 | 2.5 | 3.0 ),
  active?: boolean,
  iconColor?: string,
  backgroundColor?: string,
  activeIconColor?: string,
  activeBackgroundColor?: string,
  // onClick?: Function,
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
    <ButtonWrap size={props.size}>
      <StyledButton
        {...props}
        label={props.label}
        className={props.className}
        title={props.title}
        a11yTitle={props.title}
        plain
        onClick={() => { if(props) props.onClick()} } 
        active={props.active}
        backgroundColor={props.backgroundColor}
        activeBackgroundColor={props.activeBackgroundColor}
        iconColor={props.iconColor}
        activeIconColor={props.activeIconColor}
        icon={<Icon label={props.label} icon={props.iconDef} />}
        />
    </ButtonWrap>
  )
}


const ButtonWrap = styled.div`
  display: inline-block;
  font-size: ${props => props.size+'rem' };
` 

const StyledButton = styled(Button)`

  font-size: 1em;

  display: block;
  border-radius: 5em;
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  text-align: center;
  
  transition: ${ getDefaultTransition() };

  color: ${ props => ( props.active && props.activeIconColor ) ? props.activeIconColor : props.iconColor };
  background-color: ${props => props.active ? props.activeBackgroundColor : props.backgroundColor };

  &:hover {
    background-color: ${props => !props.active ? props.activeBackgroundColor : props.backgroundColor };
  }

  ${ props => props.label && `
    width: auto;
    height: auto;
    padding: .2em .4em;
  `
  }
  
` as typeof Button

export const Icon = styled(FontAwesomeIcon) `
  width: 1.5em !important;
  height: 1.5em !important;
  
  ${ props => props.label && `
    width: .7em !important;
    height: .7em !important;
  `
  }
` as typeof FontAwesomeIcon