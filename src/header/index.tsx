import { Box, Button, DropButton, Heading, Text } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import { getColor, getBreakpoint } from '../provider.component'
import { FontAwesomeIcon } from '../fontawesome'
import MobileMenu from './mobilemenu'
import Logo from '../logo.component'

export function Header() {
  const [open, toggleOpen] = useToggle(false)
  const [dropTarget, dropTargetRef] = useDropTarget()

  return (
    <React.Fragment>
      <TopNavWrap>
        <MobileMenuIconWrap
          open={open}
          onClick={e => {
            e.preventDefault()
            toggleOpen()
          }}
          // label="Menü"
          dropContent={<MobileMenu onClose={toggleOpen} />}
          dropTarget={dropTarget}
          reverse
          icon={<MobileMenuIcon icon={open ? ['fas', 'times'] : ['fas', 'bars']} />}
        />
        <MenuWrap>
          Superb Content!
        </MenuWrap>
        <Box pad="medium" background="brand">
          <Logo subline="Super good Serlo Slogan" />
        </Box>
      </TopNavWrap>
      <div id="test" ref={dropTargetRef} />
    </React.Fragment>
  )
}

function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue)

  return [
    value,
    () => {
      setValue(!value)
    }
  ]
}


function useDropTarget<E extends HTMLElement>(): [
  E | undefined,
  React.LegacyRef<E>
  ] {
  const [dropTarget, setDropTarget] = React.useState<E | undefined>(undefined)
  const refCallback: React.LegacyRef<E> = ref => {
    if (ref && ref !== dropTarget) {
      setDropTarget(ref)
    }
  }

  return [dropTarget, refCallback]
}

const TopNavWrap = styled.div(props => {
  return {
    backgroundColor: getColor('brand'),
    padding: '0',
    height: '11.5rem', // TODO: ?? height: $navbar-height
    alignItems: 'left',
    position: 'static'
  }
})

const MobileMenuIconWrap = styled(DropButton) `
  position: absolute;
  top: .7rem;
  right: .7rem;
  padding: .4rem;

  &:active {
    outline: none;
  }

  &:focus {
    background-color: ${ getColor('brandGreen') };
    outline: none;
  }

  &.collapsed {
    background: transparent;
    outline: none;
  }

  &.collapsed:focus {
    background-color: ${ getColor('lightblue') };
  }

  @media screen and (min-width: ${ getBreakpoint('sm') }) {
    display: none;
  }
`

const MenuWrap = styled(Box) `
  display: none;
  @media screen and (min-width: ${ getBreakpoint('sm') }) {
    display: block;
    background-color: ${getColor("lighterblue")};
    height: 3rem;
    color: ${getColor("brand")};
  }

`

const MobileMenuIcon = styled(FontAwesomeIcon)({
  fontSize: '1.66rem',
  color: '#fff'
})