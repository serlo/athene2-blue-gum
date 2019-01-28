import * as React from 'react'
// import {
//   Navbar,
//   UncontrolledDropdown,
//   DropdownToggle,
//   UncontrolledCollapse
// } from 'reactstrap'
// import DropdownMenu from 'reactstrap/lib/DropdownMenu'
// import DropdownItem from 'reactstrap/lib/DropdownItem'
import { Grommet, Menu, DropButton, Box, Heading, Button, Text } from 'grommet';

import { SearchInput } from './searchinput.component'

import Logo from './logo.component'
import styled from 'styled-components';

import { FontAwesomeIcon } from './fontawesome'

type Entry = { title: string, url?: string, class?: string, icon?: string, children?: Array<Entry> }
type NavLinks = Entry[]

export interface Props {
  links: NavLinks
}

const DropContent = ({ onClose }) => (
  <MobileMenuOverlay pad="small">
   HEYHEY
    <Box direction="row" justify="between" align="center">
      <Heading level={3} margin="small">
        Heading
      </Heading>
      <Button icon={<FontAwesomeIcon icon={['fas', 'times']} />} onClick={onClose} />
    </Box>
    <Text>Content</Text>
  </MobileMenuOverlay>
);


export class Topnav extends React.Component<Props> {
  
  constructor(props) {
    super(props);
    this.topNavBottomRef = React.createRef();
  }

  state = {};

  onClose = () => {
    this.setState({ open: false });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  public render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <TopNavWrap>
          <MobileMenuIconWrap
            open={open}
            onClose={() => this.setState({ open: undefined })}
            dropContent={<DropContent onClose={this.onClose} />}
            dropTarget={this.topNavBottomRef.current}
          >
            <MobileMenuIcon icon={open ? ['fas', 'times'] : ['fas', 'bars']} />
          </MobileMenuIconWrap>

        <Logo subline="Mathematik"/>
        {/* <Menu
          label="Actions"
          items={[
            { label: "Launch", onClick: () => {} },
            { label: "Abort", onClick: () => {} }
          ]}
          /> */}
          <SearchInput />

          {/*<Navbar
            id="top"
            light
            expand="md"
          >
            <div className="container">
            
        

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
                    // const linkClass = cx('nav-item', {
                    //   [link.class]: !!link.class
                    // })

                    var iconStr = null
                    if (link.icon)
                      iconStr = <FontAwesomeIcon icon={link.icon} size="xs" />

                    var linkStr = {}
                    if (!link.children)
                      linkStr = (
                        <a className="nav-link" href={link.url}>
                          {iconStr} {link.title}
                        </a>
                      )
                    else linkStr = this.getDropdown(link)

                    return (
                      <li key={index} /*className={linkClass}*/}{/*>
                        {linkStr}
                      </li>
                    )
                  })}
                </ul>
              </UncontrolledCollapse>

              <SearchInput />
            </div>
                </Navbar> */}
        </TopNavWrap>
        <div  ref={this.topNavBottomRef} />
      </React.Fragment>
    )
  }

  // getDropdown(parent: Entry) {
  //   return (
  //     <UncontrolledDropdown nav inNavbar>
  //       <DropdownToggle nav caret>
  //         <FontAwesomeIcon icon={parent.icon} size="xs" /> {parent.title}
  //       </DropdownToggle>
  //       <DropdownMenu right>
  //         {parent.children.map((link, index) => {
  //           return <DropdownItem key={index}>{link.title}</DropdownItem>
  //         })}
  //       </DropdownMenu>
  //     </UncontrolledDropdown>
  //   )
  // }
}


const TopNavWrap = styled.div`
  background-color: ${props => props.theme.global.colors.brand};
  padding: 1rem 0 0 0;
  height: 11.5rem;/* TODO: ?? height: $navbar-height; */
  align-items: left;
	position: static;

	/* .container {
		align-items: start;
	} */
}
`


const MobileMenuIconWrap = styled(DropButton)`
  position: absolute;
	top: .5rem;
	right: .4rem;
	padding: .4rem;
  /*transition: all .4 ; TODO: $transition-base*/

	&:active { outline: none; }
	&:focus { background: ${props => props.theme.global.colors.green}; outline:none;}
	&.collapsed { background: transparent; outline:none;}
	&.collapsed:focus { background: ${props => props.theme.global.colors.lightblue}; }
`

const MobileMenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.66rem;
  color: #fff;
`


const MyDropContentStyled = styled(DropContent) `
`

const MobileMenuOverlay = styled(Box)`
  top: 7rem;/* TODO: ?? height: $navbar-height; */
  height: calc(100vh - 11.5rem);
  max-height: calc(100vh - 11.5rem);
  overflow: auto;
`