import * as React from 'react'
import { css } from 'emotion'

export class ContentWrapper extends React.Component {
  public render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.dummyContent }} />
  }
}
