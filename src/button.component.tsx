import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Button as GrommetButton } from 'grommet'

// import { getColor, getDefaultTransition } from './provider.component'

export interface Props {
  label: string,
  icon: IconDefinition,
  size?: number,
  color?: string,
  backgroundColor?: string,
  onClick: Function,
  className?: string
}

export class Button extends React.Component<Props> {
  public render() {

    return (
      <StyledButton
        label={this.props.label}
        className={this.props.className}
        // size={this.props.size}
        secondary
        onClick={() => this.props.onClick() } 
        icon={<FontAwesomeIcon icon={this.props.icon} />}
      />
    )
  }
}

const StyledButton = styled(GrommetButton) `
` as typeof GrommetButton