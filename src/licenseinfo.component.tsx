import * as React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Anchor } from "grommet";
import SVG from 'react-inlinesvg';
const licenseSymbols = require('./img/license_ccbysa.svg')


//needs license info page URLs

export default class LicenseInfo extends React.Component {
  public render() {
    return (
      <LicenseWrap>
        Diese Inhalte stehen unter der freien <Anchor href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" rel="license nofollow">CC-BY-SA 3.0 Lizenz</Anchor>, wenn nicht anders angeben.<br/>
        Was das genau bedeutet erfährst du <Anchor href="#">hier</Anchor>.<br/>
        <IconAnchor href="https://creativecommons.org/licenses/by-sa/4.0/deed.de"><SVG src={licenseSymbols}/></IconAnchor>
      </LicenseWrap>
    )
  }
}


const LicenseWrap = styled.div(props => {
  const lightBlue = lighten(0.2,props.theme.global.colors.brand)
  return `
    opacity: 0.8;
    padding: .5rem 0;
    margin-bottom: 2rem;
    border-top: 1px solid ${ lightBlue };
    color: ${ lightBlue };
    fill: ${ lightBlue };
  `
})

const IconAnchor = styled(Anchor)(props => {
  const lightBlue = lighten(0.2,props.theme.global.colors.brand)
  return `
    display: inline-block;
    margin-top: .6rem;
    &:hover {
      background: none;
      box-shadow: none;
    }
    span > svg {
      fill: ${ lightBlue };
      width: 6rem;
      height: auto;
    }
  `
})