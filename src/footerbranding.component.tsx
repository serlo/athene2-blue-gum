import * as React from 'react'
import { css } from 'emotion'

import { library, FontAwesomeIcon } from './fontawesome'

const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

// TODO: should be in an external file
const blue = '#007EC1'

export interface Props {
  serloSlogan: string
}

export class FooterBranding extends React.Component<Props> {
  public render() {
    return (
      <div className="row footerbranding">
        <div className="brand col-lg-8">
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
        </div>

        <div className="col-lg-4">
          <div className="summary row">
            <div className="col">
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
            </div>
          </div>

          <div className="support row">
            <div className="col">
              <a href="#" className="icon">
                <img alt="part" src={participateSrc} />
                <span>Mitmachen</span>
              </a>
            </div>
            <div className="col">
              <a href="#" className="icon">
                <img alt="part" src={donateSrc} />
                <span>Spenden</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
