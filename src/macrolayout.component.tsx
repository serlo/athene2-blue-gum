import * as React from 'react'
import styled from 'styled-components'
import { Props } from 'react'
import { Box } from 'grommet'
import useWindowSize from '@rehooks/window-size'

export function MacroLayout(props: Props) {
  let main = <div />
  let left = <div />
  let right = <div />

  function assign(obj) {
    if (obj.props) {
      if (obj.props.layout === 'main') {
        main = obj
      }
      if (obj.props.layout === 'right-col') {
        right = obj
      }
      if (obj.props.layout === 'left-col') {
        left = obj
      }
    }
  }

  if (props.children.length > 0) {
    props.children.forEach(child => {
      assign(child)
    })
  } else {
    assign(props.children)
  }

  const width = useWindowSize().innerWidth

  if (width < 600) {
    return main
  }

  if (width < 900) {
    return (
      <Box direction="row">
        <Box basis="2/3">{main}</Box>
        <Box basis="1/3">{right}</Box>
      </Box>
    )
  }

  if (width < 1300) {
    return (
      <Box direction="row">
        <Box basis="1/4">{left}</Box>
        <Box basis="2/4">{main}</Box>
        <Box basis="1/4">{right}</Box>
      </Box>
    )
  }

  return (
    <Box direction="row" width="1300px" style={{ margin: 'auto' }}>
      <Box basis="1/4">{left}</Box>
      <Box basis="2/4">{main}</Box>
      <Box basis="1/4">{right}</Box>
    </Box>
  )
}

export function MainContent(props) {
  return <div layout="main">{props.children}</div>
}

export function RightCol(props) {
  return <div layout="right-col">{props.children}</div>
}

export function LeftCol(props) {
  return <div layout="left-col">{props.children}</div>
}
