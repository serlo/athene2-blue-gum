import * as React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Anchor } from 'grommet'
import SVG from 'react-inlinesvg'

interface LicenseInfoProps {
  title: string
  licenseURL: string
  infoURL: string
  symbolURL?: string
}

interface LicenseProps extends LicenseInfoProps {
  isStandard: boolean
  agreement: string
}

//needs license info page URLs

export default class LicenseInfo extends React.Component<LicenseInfoProps> {
  public render() {
    const { licenseURL, title, infoURL, symbolURL } = this.props
    return (
      <LicenseWrap>
        <Anchor href={licenseURL} rel="license nofollow">
          {title}
        </Anchor>
        <br />
        Was das genau bedeutet erfährst du <Anchor href={infoURL}>hier</Anchor>.
        <br />
        {symbolURL && (
          <IconAnchor href={licenseURL}>
            <SVG src={symbolURL} />
          </IconAnchor>
        )}
      </LicenseWrap>
    )
  }
}

const LicenseWrap = styled.div(props => {
  const lightBlue = lighten(0.2, props.theme.global.colors.brand)
  return `
    opacity: 0.8;
    padding: .5rem 0;
    margin-bottom: 2rem;
    border-top: 1px solid ${lightBlue};
    color: ${lightBlue};
    fill: ${lightBlue};
  `
})

const IconAnchor = styled(Anchor)(props => {
  const lightBlue = lighten(0.2, props.theme.global.colors.brand)
  return `
    display: inline-block;
    margin-top: .6rem;
    &:hover {
      background: none;
      box-shadow: none;
    }
    span > svg {
      fill: ${lightBlue};
      width: 6rem;
      height: auto;
    }
  `
}) as typeof Anchor
