import * as React from 'react'
import { css } from 'emotion'


const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')


// TODO: should be in an external file
const blue = '#007EC1'

export class FooterNav extends React.Component {
  public render() {
    return (
        <React.Fragment>
            <nav className="footernav row">
                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <h3>Allgemein</h3>
                        <ul>
                            <li><a href="/serlo">Über Serlo</a></li>
                            <li><a href="/mitmachen">Mitmachen</a></li>
                            <li><a href="/spenden">Spenden</a></li>
                            <li><a href="/presse">Presse</a></li>
                            <li><a href="/kontakt">Kontakt</a></li>
                            <li><a href="/93321">Serlo in anderen Sprachen</a></li>
                            <li><a href="/105250">API</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <h3>Fächer</h3>
                        <ul>
                            <li><a href="/mathe">Mathematik</a></li>
                            <li><a href="/biologie">Biologie</a></li>
                            <li><a href="/nachhaltigkeit">Angewandte Nachhaltigkeit</a></li>
                            <li><a href="/neue-faecher">Fächer im Aufbau</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <h3>Dabei bleiben</h3>
                        <ul className="connect">
                            <li><a href="https://serlo.us7.list-manage.com/subscribe?u=23f4b04bf70ea485a766e532d&amp;id=a7bb2bbc4f" className="icon"><i className="fas fa-envelope"></i> <span>Newsletter</span></a></li>
                            <li><a href="https://www.facebook.com/serlo.org" className="icon"><i className="fab fa-facebook-square"></i> <span>Facebook</span></a></li>
                            <li><a href="https://twitter.com/de_serlo" className="icon"><i className="fab fa-twitter-square"></i> <span>Twitter</span></a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <h3>Rechtlich</h3>
                        <ul>
                            <li><a href="/datenschutz">Datenschutz</a></li>
                            <li><a href="/nutzungsbedingungen">Nutzungsbedingungen und Urheberrecht</a></li>
                            <li><a href="/impressum">Impressum</a></li>
                            <li><a href="https://www.ory.am/">Diese Plattform basiert auf Open Source Technologie von ORY.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
    
  }
}
