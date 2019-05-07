import { Box, Button, DropButton, Heading, Text } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '../fontawesome'

const MobileMenuIconWrap = styled(DropButton)(({ theme }) => {
  return {
    position: 'absolute',
    top: '0.5rem',
    right: '0.4rem',
    padding: '0.4rem',

    '&:active': {
      outline: 'none'
    },

    '&:focus': {
      background: theme.global.colors.green,
      outline: 'none'
    },

    '&.collapsed': {
      background: 'transparent',
      outline: 'none'
    },

    '&.collapsed:focus': {
      background: theme.global.colors.lightblue
    }
  }
}) as typeof DropButton

const MobileMenuOverlay = styled(Box)({
  top: '7rem' /* TODO: ?? height: $navbar-height; */,
  height: 'calc(100vh - 11.5rem)',
  maxHeight: 'calc(100vh - 11.5rem)',
  overflow: 'auto'
}) as typeof Box

const MobileMenuIcon = styled(FontAwesomeIcon)({
  fontSize: '1.66rem',
  color: '#fff'
})

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
          dropContent={<MobileMenu onClose={toggleOpen} />}
          dropTarget={dropTarget}
        >
          <MobileMenuIcon icon={open ? ['fas', 'times'] : ['fas', 'bars']} />
        </MobileMenuIconWrap>
      </TopNavWrap>
      <div ref={dropTargetRef} />
    </React.Fragment>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <MobileMenuOverlay pad="small">
      HEYHEY
      <Box direction="row" justify="between" align="center">
        <Heading level="3" margin="small">
          Heading
        </Heading>
        <Button
          icon={<FontAwesomeIcon icon={['fas', 'times']} />}
          onClick={onClose}
        />
      </Box>
      <Text>Content</Text>
    </MobileMenuOverlay>
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
    backgroundColor: props.theme.global.colors.brand,
    padding: '1rem 0 0 0',
    height: '11.5rem', // TODO: ?? height: $navbar-height
    alignItems: 'left',
    position: 'static'
  }
})
