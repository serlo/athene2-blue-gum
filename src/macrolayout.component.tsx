import * as React from 'react'
import styled from 'styled-components'
import { Props } from 'react'
import { Box } from 'grommet'
import useWindowSize from '@rehooks/window-size'

export function MacroLayout(props: Props) {
  let main = props.main
  let left = props.nav
  let right = props.aside

  const width = useWindowSize().innerWidth

  if (width < 900) {
    return (
      <div
        style={{
          margin: 'auto',
          maxWidth: '800px'
        }}
      >
        {main}
      </div>
    )
  }

  if (width < 1100) {
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
