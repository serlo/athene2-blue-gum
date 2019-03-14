import * as React from 'react'
import styled from 'styled-components'
import { getColor } from '../provider.component';
import { DropButton} from 'grommet'
import { IconButton } from '../iconbutton.component'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  open : boolean,
  onClick : Function,
  dropContent: JSX.Element,
  dropTarget?: object
}

export function MobileMenuButton( {open, onClick, dropContent, dropTarget} : Props ) {
    return (
      <React.Fragment>
        <MenuButton
          title="Menü öffnen"
          icon={open ? faTimes : faBars}
          active={open}
          size={1.1}
          activeBackgroundColor={getColor('lighterblue')}
          onClick={onClick}
        />
        <HiddenDropButton
          label="Mobiles Menü öffnen"
          open={open}
          onClick={onClick}
          dropContent={dropContent}
          dropTarget={dropTarget}
        />
      </React.Fragment>
    )
  }


const HiddenDropButton = styled(DropButton)`
  display: none;
`

const MenuButton = styled(IconButton) `
  /* color: red !important; */
` as typeof DropButton


