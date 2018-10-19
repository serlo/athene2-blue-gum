import * as React from 'react'
import {
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  UncontrolledCollapse
} from 'reactstrap'
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownItem from 'reactstrap/lib/DropdownItem'
import { css } from 'emotion'

const logo = require('./img/serlo-logo.svg')

// TODO: should be in an external file
const blue = '#007EC1'

export class Topnav extends React.Component {
  public render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {/* FIXME: */}
        <Navbar
          id="top"
          light
          expand="md"
          className={css({ backgroundColor: `${blue} !important` })}
        >
          {/* <nav id="top" className="navbar navbar-expand-md navbar-light bg-light"> */}
          <div className="container">
            <div className="navbar-brand-wrap">
              <h1>
                <a className="navbar-brand" href=".">
                  <img alt="Serlo" src={logo} />
                </a>
              </h1>
              <h2>
                <a className="navbar-subline" href="#subject">
                  Mathematik
                </a>
              </h2>
            </div>

            <button
              id="mobile-toggle"
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMobileMenu"
              aria-controls="navbarMobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarMobileMenu"
            > */}
            <UncontrolledCollapse
              toggler="#mobile-toggle"
              navbar
              className="justify-content-end"
            >
              <ul className="navbar-nav">
                {this.props.links.map((link, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a className="nav-link" href={link.url}>
                        {link.title}
                      </a>
                    </li>
                  )
                })}
                {/* <li className="nav-item">
                  <a className="nav-link" href=".">
                    <i className="fas fa-xs fa-question-circle" /> Neu hier?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    <i className="fas fa-xs fa-user-circle" /> Anmelden
                  </a>
                </li>
                <li className="nav-item seperator" />
                <li className="nav-item active">
                  <a className="nav-link" href=".">
                    <i className="fas fa-xs fa-arrow-circle-right" /> Lernen!{' '}
                    <span className="sr-only">(current)</span>
                  </a>
                </li> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i className="far fa-xs fa-newspaper" /> Was ist Serlo?
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="nav-item donate">
                  <a className="nav-link" href="#">
                    <i className="fas fa-xs fa-hand-holding-heart" /> Spenden
                  </a>
                </li>
              </ul>
            </UncontrolledCollapse>

            <form className="form-inline">
              <input
                className="form-control"
                type="text"
                placeholder="Suche"
                aria-label="Suche"
              />
              <button className="btn btn-success" type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          {/* </nav> */}
        </Navbar>
      </React.Fragment>
    )
  }
}
