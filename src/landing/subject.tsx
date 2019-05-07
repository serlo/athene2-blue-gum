import * as React from 'react'
import styled from 'styled-components'
import { Col } from 'react-styled-flexboxgrid'
import { lighten } from 'polished'

import SVG from 'react-inlinesvg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export interface SubjectProps {
  url: string,
  iconSrc: string,
  text: string
}

export default class Subject extends React.Component<SubjectProps> {
  public render() {
    return (
      <SubjectCol xs={12} sm={12} md={6} lg={3} >
        <a href={this.props.url}>
          <SubjectSVG src={this.props.iconSrc}/>
          <Header>{this.props.text}
            <SmallIcon icon={faArrowCircleRight}/>
          </Header>
        </a>
      </SubjectCol>
    )
  }
}

const SubjectCol = styled(Col) `
  border-bottom: 1px solid ${props => props.theme.global.colors.lightblue};

  @media (min-width: ${props => props.theme.md}) {
    border-bottom: 0;
    text-align: center;
  }
`

const Header = styled.h2 `
  font-size: 2rem;
  line-height: 5.8rem;
  display: inline-block;
  padding: .1rem;
  vertical-align: top;
  margin-top: 2.5rem;
  color: ${props => props.theme.global.colors.brand};

  ${SubjectCol}:hover & {
    background-color: ${props => lighten(0.5,props.theme.global.colors.brand)};
  }
  
  @media (min-width: ${props => props.theme.md}) {
    font-size: 1.5rem;
    line-height: 1.45;
    display: inline-block;
    width: auto;
    padding: .3rem .6rem;
    border-radius: .4em;
    margin-top: 0;
    transition: color .4s ease, background-color .4s ease;
  }
`

const SmallIcon = styled(FontAwesomeIcon) `
  margin-left: .4rem;
  vertical-align: middle;

  @media (min-width: ${props => props.theme.md}) {
    display: none;
  }
`

const SubjectSVG = styled(SVG) `
  width: 25vw;
  height: 6.2rem;

	.blue {
		fill: ${props => props.theme.global.colors.helperblue};
		transition: ${props => props.theme.global.defaultTransition};
	}

	.green {
		fill: #becd2b;
    transition: ${props => props.theme.global.defaultTransition};
  }

  @media (min-width: ${props => props.theme.md}) {
    .blue {
      fill: ${props => lighten(0.07,props.theme.global.colors.lighterblue)};
    }
  }
   
  @media (min-width: ${props => props.theme.lg}) {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
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

  ${SubjectCol}:hover & svg, ${SubjectCol}:focus & svg, ${SubjectCol}:active & svg {
    &.bio { animation: jump .7s ease-in-out; }
    &.abc { transform: scale(1.25) rotate(10deg); }
    &.math { transform: rotateY(-180deg) rotateX(-3deg); }
    &.sus { transform: rotate(-30deg); }
    &.sus .blue.water{ transform: scale(1.08); }

    @media (min-width: ${props => props.theme.md}) {
      .blue { fill: ${props => props.theme.global.colors.helperblue}; }
      .green { fill: #becd2b; }
    }
  }

  @keyframes jump {
    16% { transform: translateY(1rem); }
    33% { transform: translateY(-.6rem); }
    50% { transform: translateY(.4rem); }
    67% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }


`