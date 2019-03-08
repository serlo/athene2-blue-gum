import * as React from 'react'
import styled from 'styled-components'

import { Heading as GrommetHeading } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { getColor } from './provider.component'

export interface Props {
  level: "1" | "2" | "3" | "4" | "5" | "6",
  icon?: IconDefinition,
  color?: string
}

export class Heading extends React.Component<Props> {
  public render() {
    return (
      <StyledHeading level={this.props.level} color={this.props.color}>

        {this.props.icon ?
            <Icon
                icon= {this.props.icon}
                color="default"
            />
        : null }
        
        {this.props.children}
      
      </StyledHeading>
    )
  }
}

const StyledHeading = styled(GrommetHeading) `
  color: ${props => props.color ? props.color : getColor('brand') };
`

const Icon = styled(FontAwesomeIcon) `
  width: 0.75em;
  height: 0.75em;
  margin-right: .1em;
`