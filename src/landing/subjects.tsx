import * as React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Anchor } from "grommet";

import SVG from 'react-inlinesvg';

const iconMath = require('../img/subjects-math.svg')
const iconABC = require('../img/subjects-abc.svg')
const iconSustainability = require('../img/subjects-sustainability.svg')
const iconBiology = require('../img/subjects-biology.svg')

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// export interface Props {
//   // serloSlogan: string
// }

{/* <FontAwesomeIcon icon={faArrowCircleRight}/> */}

class Subject extends React.Component {
  public render() {
    return (
      <SubjectCol lg={3} md={6}>
        <a href={this.props.url}>
          <SubjectSVG src={this.props.iconSrc}/>
          <h2>{this.props.text}
            <FontAwesomeIcon icon={faArrowCircleRight}/>
          </h2>
        </a>
      </SubjectCol>
    )
  }
}


export default class Subjects extends React.Component {
  public render() {
    return (
      <SubjectsGrid fluid>
        <Row>
          <Subject text='Mathematik lernen' url='/mathe' iconSrc={iconMath} />
          <Subject text='Alphabetisierung' url='/abc' iconSrc={iconABC} />
          <Subject text='Nachhaltigkeit lernen' url='/nachhaltigkeit' iconSrc={iconSustainability} />
          <Subject text='Biologie lernen' url='/biologie' iconSrc={iconBiology} />
        </Row>
      </SubjectsGrid>
    )
  }
}


const SubjectsGrid = styled(Grid) `
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const SubjectSVG = styled(SVG) `
  width: 25vw;
  height: 6.2rem;

	.blue {
		fill: ${props => props.theme.global.colors.lightblue};
		transition: ${props => props.theme.global.defaultTransition};
	}

	.green {
		fill: #becd2b;
    transition: ${props => props.theme.global.defaultTransition};
  }

  @media (min-width: ${props => props.theme.lg}) {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
  }
    
`


const SubjectCol = styled(Col) `
  border-bottom: 1px solid ${props => props.theme.global.colors.lightblue};

  h2 {
    font-size: 1.5rem;
    line-height: 1.1;
    display: inline-block;
    padding: .1rem;
    vertical-align: top;
    margin-top: 2.5rem;
    color: ${props => props.theme.global.colors.brand};

    span {
      font-size: 1rem;
    }
  }

  h2 svg { margin-left: .4rem; vertical-align: bottom; }

  .home-emph-link svg .blue { fill: ${props => props.theme.global.colors.lightblue}; } /* lighterblue lighten 5% */
	.home-emph-link svg .green { fill: #becd2b; }

  .abc {
    h2{
      margin-top: 1.5rem;
    }
    i {
      margin-top: .3rem;
    }
  }

  &.no-icon {
    h2 {
      width: 100%;
      height: 3.5rem;
    }
  }

  /* animations */
  svg {
    transition: transform .4s cubic-bezier(0.175, 0.885, 0.320, 1.275);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    animation-play-state: paused; 
    &.math { transition-duration: .6s; }
    &.sus path.water{
      transform: scale(0) translateY(-30px);
      transform-origin: 9% 60%;
      transition: transform .6s cubic-bezier(0.175, 0.6, 0.32, 1.275);
    }
  }

  &:hover svg, &:focus svg, &:active svg{
    &.bio { animation: jump .7s ease-in-out; }
    &.abc { transform: scale(1.25) rotate(10deg); }
    &.math { transform: rotateY(-180deg) rotateX(-3deg); }
    &.sus { transform: rotate(-30deg); }
    &.sus .blue.water{ transform: scale(1.08); }
  }

  @keyframes jump {
    16% { transform: translateY(1rem); }
    33% { transform: translateY(-.6rem); }
    50% { transform: translateY(.4rem); }
    67% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }



  @media (min-width: ${props => props.theme.md}) {
    text-align: center;
    
    h2 {
      font-size: 1.2rem !important;
      line-height: 1.45;
      display: inline-block;
      width: auto;
      padding: .3rem .6rem;
      border-radius: .4em;
      margin-top: 0;
      transition: color .4s ease, background-color .4s ease;
    }

    h2 svg {
			display: none;
    }
    &.no-icon { 
      h2 { margin-top: 4rem; width: auto; height: auto;}
      h2 svg { display: inline; }
    }
    .abc h2 { margin-top: 0; }

    &:hover {
      a { text-decoration: none; }
      h2 { background: rgba(0, 126, 193, 0.25); } /* ${props => props.theme.global.colors.brand} ___ lighten fade-out($blue,0.75); */
      .a svg .blue { fill: ${props => props.theme.global.colors.helperblue}; }
    }
  }

`