import * as React from 'react'
import { Props } from 'react'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'

export function MacroLayout(props: Props) {
  let main = props.main
  let left = props.nav
  let right = props.aside

  return (
    <>
      <Grid fluid>
        <Row center={'xs'} style={{ maxWidth: 1300, margin: 'auto' }}>
          <Col xs={false} lg={3}>
            {left}
          </Col>
          <Col xs={12} md={8} lg={6} style={{ maxWidth: 800 }}>
            {main}
          </Col>
          <Col xs={false} md={4} lg={3}>
            {right}
          </Col>
        </Row>
      </Grid>
    </>
  )
}
