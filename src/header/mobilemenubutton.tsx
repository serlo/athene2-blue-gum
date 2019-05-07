import * as React from 'react'
import styled from 'styled-components'
import { getColor } from '../provider.component'
import { DropButton } from 'grommet'
import { Button } from '../button.component'

export interface Props {
  open: boolean
  onClick: Function
  dropContent: JSX.Element
  dropTarget?: object
}

export function MobileMenuButton({
  open,
  onClick,
  dropContent,
  dropTarget
}: Props) {
  return (
    <React.Fragment>
      <MenuButton
        title="Menü öffnen"
        iconName={open ? 'faTimes' : 'faBars'}
        active={open}
        size={1.1}
        activeBackgroundColor={getColor('lighterblue')}
        onClick={onClick}
      />
      <HiddenDropButton
        open={open}
        dropContent={dropContent}
        dropTarget={dropTarget}
      />
    </React.Fragment>
  )
}

const HiddenDropButton = styled(DropButton)`
  display: none;
` as typeof DropButton

const MenuButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
` as typeof Button
