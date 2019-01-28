import * as React from 'react'
import styled from 'styled-components'

const logoSrc = require('./img/serlo-logo.svg')

export interface Props {
  subline?: string
}

export default class Logo extends React.Component<Props> {
  public render() {
    return (
      <LogoWrap>
        <h1>
          <a className="brand" href=".">
            <img alt="Serlo" src={logoSrc} />
          </a>
        </h1>
        { !this.props.subline ? null : 
        <h2>
          <a className="subline icon" href="#subject">
            {this.props.subline}
          </a>
        </h2>
        }
      </LogoWrap>
    )
  }
}

const LogoWrap = styled.div`

  a {
    border: 0 !important;
    padding-bottom: 0
  }

  h1 {
    padding-bottom: 0;
    margin-bottom: 0.2rem;
  }

  img{
    width: 9rem;
    padding: 0.8rem 0 0 0.8rem;
  }

  h2 {
    a.subline {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 300;
      font-size: 1.66rem;
      padding-left: 3.5rem;
      letter-spacing: 0.04rem;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }
`