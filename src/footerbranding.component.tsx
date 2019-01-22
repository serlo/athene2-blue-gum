import * as React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import { library, FontAwesomeIcon } from './fontawesome'

const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

export interface Props {
  serloSlogan: string
}

export class FooterBranding extends React.Component<Props> {
  public render() {

    console.log(this.props)

    return (
      <BrandingGrid fluid>
        <BrandingWrap>
          <Col xs={12} md={8} className="brand">
            <div className="navbar-brand-wrap">
              <h1>
                <a className="navbar-brand" href=".">
                  <img alt="Serlo" src={logoSrc} />
                </a>
              </h1>
              <h2>
                <a className="navbar-subline icon" href="#subject">
                  {this.props.serloSlogan}
                </a>
              </h2>
            </div>
            <a id="toplink" href="#top" title="Mit Serlo ganz nach oben ;)">
              <FontAwesomeIcon icon="chevron-up" size="2x" />
            </a>
          </Col>

          <Col xs={12} md={4}>
            <Row className="summary">
              <Col xs={12}>
                <h2>
                  <a href="#">Serlo.org</a> ist die Wikipedia fürs Lernen.
                </h2>
                <p>
                  Wir sind eine engagierte Gemeinschaft, die daran arbeitet,
                  hochwertige Bildung weltweit frei verfügbar zu machen.
                </p>
                <p>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon="chevron-circle-right" />{' '}
                    <span>Mehr erfahren</span>
                  </a>
                </p>
              </Col>
            </Row>

            <Row className="support">
              <Col xs>
                <a href="#" className="icon">
                  <img alt="part" src={participateSrc} />
                  <span>Mitmachen</span>
                </a>
              </Col>
              <Col xs> 
                <a href="#" className="icon">
                  <img alt="part" src={donateSrc} />
                  <span>Spenden</span>
                </a>
              </Col>
            </Row>
          </Col>
        </BrandingWrap>
      </BrandingGrid>
    )
  }
}


const BrandingGrid = styled(Grid)`
  padding: 0;
`

const BrandingWrap = styled(Row)`
  
  /*@media (max-width: 1200px){  /*media-breakpoint-up(lg)*/
    /*
    .brand{
      margin-top: 0;
      padding: 0.5rem 2rem;
    }
    .summary {
      padding: 2rem 1rem 0 1rem;
    }
    .support {
    }
  }*/

  a:not(.icon), a.icon {
    text-decoration: none;
    color: #fff;
    padding-bottom: .03em;
    border-bottom: .1rem solid transparent;
  }

  a:not(.icon):hover, a.icon:hover span{
    color: #fff;
    text-decoration: none;
    border-bottom: .1rem solid;
  }

  a.icon {
    text-decoration: none;
    color: #fff;
  }

.support img {
  display: block;
  margin: 0 auto;
}

.brand{
  background-color: ${props => props.theme.global.colors.brand};
  position: relative;

  a.navbar-subline {
    color: rgba(255, 255, 255, 0.4);
    &:hover {
      color: #fff;
    }
  }

  a {
    border: 0 !important;
    padding-bottom: 0
  }

  #toplink {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
}

.summary {
  background-color: ${props => props.theme.global.colors.lightblue};
  color: #fff;
  padding-top: 2.5rem;
  
  @media (max-width: ${props => props.theme.flexboxgrid.breakpoints.md + 'rem'}) {
    padding-left: 3rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    margin: 2rem 0;
  }
}

.support {
  padding: 1rem 0;
  background-color: ${props => props.theme.global.colors.green};
  color: #fff;
  text-align: center;

  img{
    max-width: 5rem;
  }
}


.navbar-brand-wrap {

  h1 {
    padding-bottom: 0;
    margin-bottom: 0.2rem;
  }

  img{
    width: 9rem;
    padding: 0.8rem 0 0 0.8rem;
  }

  .navbar-brand{
    padding-bottom: 0;
  }
}

.navbar-subline {
	color: rgba(#fff,0.4);
	font-weight: 300;
	font-size: 1.66rem;
	padding-left: 3.5rem;
	letter-spacing: 0.04rem;
}

`