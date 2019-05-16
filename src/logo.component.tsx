import * as React from 'react'
import styled from 'styled-components'

const logoSrc = require('./img/serlo-logo.svg')

export interface Props {
  subline?: string
}

export default class Logo extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Header>
          <Link className="brand" href=".">
            <Image alt="Serlo" src={logoSrc} />
          </Link>
        </Header>
        { !this.props.subline ? null :
        <h2>
          <SublineLink className="subline icon" href="#subject">
            {this.props.subline}
          </SublineLink>
        </h2>
        }
      </React.Fragment>
    )
  }
}

const Header = styled.h1`
    padding-bottom: 0;
    margin-bottom: -0.85rem;

`

const Link = styled.a`
    border: 0 !important;
    padding-bottom: 0;
`
const SublineLink = styled(Link)`
      color: rgba(255, 255, 255, 0.4);
      font-weight: 500;
      font-size: 1.66rem;
      padding-left: 0.5rem;
      display: block;
      line-height: 1.4;
      letter-spacing: 0.04rem;
      text-decoration: none;

      &:hover {
        color: #fff;
      }

      @media screen and (min-width: 35rem) {
        padding-left: 3.5rem;
      }
`


const Image = styled.img`
    width: 9rem;
    padding: 0.8rem 0 0 0.8rem;
`
