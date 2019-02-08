import * as React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { library, FontAwesomeIcon } from './fontawesome'
import Logo from './logo.component'

const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

export interface Props {
  serloSlogan: string
}

export class FooterBranding extends React.Component<Props> {
  public render() {
    return (
      <BrandingGrid fluid>
        <BrandingWrap>
          <Col xs={12} md={8} className="brand">
            <Logo subline={this.props.serloSlogan} />
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
  margin-right: 0;

  a:not(.icon),
  a.icon {
    text-decoration: none;
    color: #fff;
    padding-bottom: 0.03em;
    border-bottom: 0.1rem solid transparent;
  }

  a:not(.icon):hover,
  a.icon:hover span {
    color: #fff;
    text-decoration: none;
    border-bottom: 0.1rem solid;
  }

  a.icon {
    text-decoration: none;
    color: #fff;
  }

  .support img {
    display: block;
    margin: 0 auto;
  }

  .brand {
    background-color: ${props => props.theme.global.colors.brand};
    position: relative;

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

    @media (max-width: ${props => props.theme.md}) {
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

    img {
      max-width: 5rem;
    }
  }
`
