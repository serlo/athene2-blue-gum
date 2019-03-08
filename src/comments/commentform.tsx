import * as React from 'react'
import styled from 'styled-components'
import { Col } from 'react-styled-flexboxgrid'
const outerBorderColor = '#2e6da4'

import { UserContext, EntityContext } from '../../src/context'
import TextareaAutosize from 'react-textarea-autosize'

import { Box, Button } from 'grommet'
import { getColor, transparentizeColor, lightenColor } from '../provider.component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// import SVG from 'react-inlinesvg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class CommentForm extends React.Component<
  CommentFormProps, { newCommentValue: string }> {
  constructor(props: CommentFormProps) {
    super(props)
    this.state = { newCommentValue: '' }
  }
  render() {
    const { parent_id, onSendComment } = this.props
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <EntityContext.Consumer>
            {({ entity }) => (
              <StyledBox margin={{ bottom: 'medium' }}>
                  <StyledTextarea
                    value={this.state.newCommentValue}
                    onChange={event => {
                      this.setState({ newCommentValue: event.target.value })
                    }}
                    placeholder="Deine Frage oder Anregung …"
                  />
                  <SendButton
                //   label="Kommentar abschicken"
                  icon={<FontAwesomeIcon icon={faArrowRight}/>}
                  primary
                  onClick={() =>
                    onSendComment({
                      entity_id: entity.id,
                      parent_id: parent_id,
                      user_id: user.id,
                      user_name: user.username,
                      body: this.state.newCommentValue
                    })
                  }
                />
              </StyledBox>
            )}
          </EntityContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}


const StyledBox = styled(Box) `
    position: relative;
`

const StyledTextarea = styled(TextareaAutosize) `
    background: ${ lightenColor('brandGreen', 0.445) };
    color: ${ getColor('black') };

    border: none;
    border-radius: 1.8rem;
    padding: 1.25rem 1rem;
    outline: none;
    overflow: hidden;
    resize: none;
    
    min-height: 1rem;

    ::placeholder {
        color: ${ getColor('brandGreen') };
    }
    
    &:focus {
        min-height: 3rem;
        background: ${ lightenColor('brandGreen', 0.2) };
    }

    transition: all .2s ease-in-out;
`

const SendButton = styled(Button) `
    height: 2rem;
    width: 2rem;
    background-color: ${ getColor('brandGreen') };
    border-radius: 5rem;

    position: absolute;
    right: .75rem;
    bottom: .75rem;

    padding-top: .35em;
    padding-left: .4rem;

    svg {
        width: 1.3rem !important;
        height: 1.3rem !important;
    }
`

interface SendProps {
    entity_id: string
    parent_id: string
    user_id: string
    user_name: string
    body?: string
  }
  interface CommentFormProps {
    parent_id: string
    onSendComment: (props: SendProps) => void
  }
