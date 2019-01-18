import * as React from 'react'
// import { css } from 'emotion'
import { library, FontAwesomeIcon } from './fontawesome'
import { Box, Grommet } from 'grommet';
import styled from 'styled-components';

const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

export class FooterNav extends React.Component {
  public render() {
    return (
      <Box as="nav" background="footerBackground" alignContent="around" gap="medium" pad="large" responsive direction="row-responsive">
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
            <Box basis="1/4"  key={index}>
              <CategoryHeader>{header.title}</CategoryHeader>
              <NavList>{children}</NavList>
            </Box>
          )
        })}
      </Box>
    )
  }
}

const CategoryHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 0.5rem;
  font-size: 700;
`

const NavList = styled.ul `

  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 1.35;
  -webkit-text-stroke: .45px;

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

    @media (min-width: 768px) {
      li {
        display: block;
        margin-top: .3rem;
        &:after{
          content: "";
        }
    }

}

`