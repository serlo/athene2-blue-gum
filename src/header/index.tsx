import { Box } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import { getColor, getBreakpoint } from '../provider.component'
import MobileMenu from './mobilemenu'
import Menu from './menu'
import Logo from '../logo.component'

const topNavLinks = [
  { title: '', class: 'seperator'},
  { title: 'Neu hier?', url: 'https://google.de', icon: 'question-circle' },
  { title: 'Anmelden', url: '#', icon: 'user-circle' },
  { title: '', class: 'seperator'},
  { title: 'Lernen', url: '#', icon: 'arrow-circle-right' },
  { title: 'Was ist Serlo?', url: '#', icon: 'newspaper', children: [
      {title: 'Action', url: '#'},
      {title: 'Test', url: '#'},
      {title: 'Längerer Eintrag', url: '#'},
  ]},
  { title: 'Spenden', url: '#', class: 'donate', icon: 'hand-holding-heart', highlight: true },
]

export function Header() {
  const [overlayTarget, overlayTargetRef] = useOverlayTarget()

  return (
    <React.Fragment>
      <TopNavWrap>
        <StyledMobileMenu links={topNavLinks} overlayTarget={overlayTarget} />

        <StyledMenu links={topNavLinks}/>

        <Box pad="medium" background="brand">
          <Logo subline="Super good Serlo Slogan" />
        </Box>
        <div id="test" ref={overlayTargetRef} />
      </TopNavWrap>

      
    </React.Fragment>
  )
}

function useOverlayTarget<E extends HTMLElement>(): [
  E | undefined,
  React.LegacyRef<E>
  ] {
  const [overlayTarget, setOverlayTarget] = React.useState<E | undefined>(undefined)
  const refCallback: React.LegacyRef<E> = ref => {
    if (ref && ref !== overlayTarget) {
      setOverlayTarget(ref)
    }
  }
  return [overlayTarget, refCallback]
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

const StyledMobileMenu = styled(MobileMenu) `
  display: block;
  @media screen and (min-width: ${ getBreakpoint('sm') }) {
    display: none;
  }
`

const StyledMenu = styled(Menu) `
  display: none;
  @media screen and (min-width: ${ getBreakpoint('sm') }) {
    display: block;
    background-color: ${getColor("lighterblue")};
    height: 3rem;
    color: ${getColor("brand")};
  }
`
