import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button.component'
import {
  getColor,
  getDefaultTransition,
  lightenColor
} from './provider.component'
import { useScrollYPosition } from 'react-use-scroll-position'

export function EditBox(props) {
  const scrollY = useScrollYPosition()
  const summary = scrollY > 30 ? false : true

  return (
    <React.Fragment>
      <Summary show={summary}>
        Bearbeitungen: <b>5</b>
        <p>
          <SummaryButton
            label="Inhalt bearbeiten"
            iconName="faPencilAlt"
            fontColor={getColor('lighterblue')}
            backgroundColor="transparent"
            activeBackgroundColor={getColor('lighterblue')}
            size={0.8}
            reverse
          />
          <SummaryButton
            label="Versionsgeschichte"
            iconName="faHistory"
            fontColor={getColor('lighterblue')}
            backgroundColor="transparent"
            activeBackgroundColor={getColor('lighterblue')}
            size={0.8}
            reverse
          />
        </p>
      </Summary>
      <StyledButton
        className={props.className}
        a11yTitle={props.title}
        plain
        iconName="faPencilAlt"
        reverse
        hiddenLabel={'Artikel bearbeiten'}
        show={!summary}
        activeBackgroundColor={getColor('brandGreen')}
      />
    </React.Fragment>
  )
}

const SummaryButton = styled(Button)`
  margin-left: -0.3em;
  svg {
    width: 1em !important;
    height: 1em !important;
  }
`

const Summary = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  font-size: 0.8rem;
  width: 10rem;
  color: ${getColor('lighterblue')};

  border-left: 0.15rem solid ${lightenColor('brand', 0.55)};
  padding: 0.2rem 0 0.2rem 0.5rem;

  > p {
    margin-bottom: 0;
  }

  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? 'all' : 'none')};
`
const StyledButton = styled(Button)`
  position: fixed;
  bottom: 4rem;
  right: 7rem;
  text-align: right;

  transition: opacity .2s ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? 'all' : 'none')};

  @media screen and (hover: hover) {
    &:hover {
      width: 7.5rem;
    }
    &:before {
      position: absolute;
      text-align: right;
      font-size: 0.8rem;
      line-height: 1.2;
      width: 5rem;
      left: 0;
      top: .27rem;
      content: "${props => props.hiddenLabel}";
      display: inline-block;
      color: #fff;
      transition: none;
      transition-delay: 0;
      opacity: 0;
    }

    &:hover:before {
      opacity: 1;
      transition: ${getDefaultTransition()};
      transition-delay: 0.05s;
    }
  }

  > svg {
    width: 1.3rem !important;
    height: 1.3rem !important;
    vertical-align: -0.2em;
    margin-right: .6rem;
  }
`
