import * as React from 'react'
import { css } from 'emotion'


const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')


// TODO: should be in an external file
const blue = '#007EC1'

export class ContentWrapper extends React.Component {
  public render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.dummyContent}} />
    )
    
  }
}
