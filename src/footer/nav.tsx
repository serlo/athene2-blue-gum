import * as React from 'react'
import { FontAwesomeIcon } from '../fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { getColor, getBreakpoint } from '../provider.component'
import styled from 'styled-components'

export interface NavChild {
  title: string
  url: string
  icon?: IconProp
}
export interface NavEntry {
  title: string
  children: NavChild[]
}

export interface NavProps {
  links: NavEntry[]
}

export function Nav(props: NavProps) {
  return (
    <FooterNavGrid fluid>
      <nav>
        <Row>
          {props.links.map((header, index) => {
            let children = header.children.map((link, index) => {
              let linkStr
              if (!link.icon) linkStr = <a href={link.url}>{link.title}</a>
              else
                linkStr = (
                  <a href={link.url} className="icon">
                    <FontAwesomeIcon icon={link.icon} />{' '}
                    <span>{link.title}</span>
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

const FooterNavGrid = styled(Grid)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${getColor('footerBackground')};
`

const CategoryHeader = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  line-height: 1.35;

  a {
    color: #888;
    text-decoration: none;
  }

  a:not(.icon) {
    &:hover {
      color: #444;
      border-color: #ccc;
    }
  }

  a.icon {
    &:hover span {
      border-color: #ccc;
    }
    &:hover,
    &:hover span {
      color: #444;
    }
  }

  li {
    display: inline;

    &:after {
      content: ' • ';
      color: #ccc;
    }
    &:last-child:after {
      content: '';
    }
  }
  /* li:after {
    content: ' ';
    margin-left: 0.4rem;
  } */

  @media (min-width: ${getBreakpoint('lg')}) {
    li {
      display: block;
      margin-top: 0.3rem;
      &:after {
        content: '';
      }
    }
  }
`
