import * as React from 'react'
// import { css } from 'emotion'
import { library, FontAwesomeIcon } from './fontawesome'
import { Box, Grommet } from 'grommet';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

export class FooterNav extends React.Component {
  public render() {
    return (
      <FooterNavGrid fluid>
        <nav>
          <Row>
            {this.props.links.map((header, index) => {
              let children = header.children.map((link, index) => {
                let linkStr
                if (!link.icon) linkStr = <a href={link.url}>{link.title}</a>
                else
                  linkStr = (
                    <a href={link.url} className="icon">
                      <FontAwesomeIcon icon={link.icon} /> <span>{link.title}</span>
                    </a>
                  )
                return <li key={index}>{linkStr}</li>
              })
              return (
                <Col xs={12} md={6} lg key={index}>
                  <CategoryHeader>{header.title}</CategoryHeader>
                  <NavList>{children}</NavList>
                </Col> 
              )
            })}
          </Row>
        </nav>
      </FooterNavGrid>
    )
  }
}

const FooterNavGrid = styled(Grid)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${props => props.theme.global.colors.footerBackground};

`


const CategoryHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: #444;
`

const NavList = styled.ul `

  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 1.35;

  a{
    color: #888;
    text-decoration: none;
  }

  a:not(.icon) {      
      &:hover{
        color: #444;
        border-color: #ccc;
      }
    }

    a.icon{
      &:hover span {
        border-color: #ccc;
      }
      &:hover, &:hover span{
        color: #444;
      }
    } 

    li {
      display: inline;

      &:after {
        content: " • ";
        color: #ccc;
      }
      &:last-child:after {
          content: "";
      }
    }
    &.connect li:after {
      content: " ";
      margin-left: 0.4rem;
    }

    @media (min-width: 1200px) { /*${props => props.theme.flexboxgrid.breakpoints.md}*/
      li {
        display: block;
        margin-top: .3rem;
        &:after{
          content: "";
        }
    }

}

`