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
import { cx } from 'emotion'

// TODO: do some kind of autoimport, atm. it imports everything, also: how will the input data look like for icons?
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas)


const logo = require('./img/serlo-logo.svg')

// TODO: should be in an external file
const blue = '#007EC1'

type Entry = { title: string, url?: string, class?: string, icon?: string, children?: Array<Entry> }
type NavLinks = Array<Entry>

export interface Props {
  links: NavLinks;
}

export class Topnav extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        {/* FIXME: */}
        <Navbar
          id="top"
          light
          expand="md"
          className={css({ backgroundColor: `${blue} !important` })}
        >
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

            <UncontrolledCollapse
              toggler="#mobile-toggle"
              navbar
              className="justify-content-end"
            >
              <ul className="navbar-nav">
                {this.props.links.map((link, index) => {
                  
                  const linkClass = cx('nav-item', { [link.class]: !!link.class })
                  
                  var iconStr = {}
                  if(link.icon) iconStr = <FontAwesomeIcon icon={link.icon} size="xs" />

                  var linkStr = {}
                  if(!link.children) linkStr = <a className='nav-link' href={link.url}>{iconStr} {link.title}</a>
                  else linkStr = this.getDropdown(link)

                  return (
                    <li key={index} className={linkClass} >
                      {linkStr}
                    </li>
                  )
                })}
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

  getDropdown(parent: Entry){
    return(
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <FontAwesomeIcon icon={parent.icon} size="xs"/> {parent.title}
          </DropdownToggle>
          <DropdownMenu right>   
        { parent.children.map( (link,index) => {
          return <DropdownItem key={index}>{link.title}</DropdownItem>          
          })}
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }
}


{/* 
  
  <UncontrolledDropdown nav inNavbar>
  <DropdownToggle nav caret>
    <i className="far fa-xs fa-newspaper" /> Was ist Serlo?
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem>Action</DropdownItem>
    <DropdownItem>Another action</DropdownItem>
    <DropdownItem>Something else here</DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown> */}
