import * as React from 'react'
import styled from 'styled-components'
import { UserContext, EntityContext } from '../../src/context'
import TextareaAutosize from 'react-textarea-autosize'
import { Box } from 'grommet'
import { IconButton } from '../iconbutton.component'
import { getColor, lightenColor, getDefaultTransition } from '../provider.component'
import { faArrowRight, faReply } from '@fortawesome/free-solid-svg-icons'


export default class CommentForm extends React.Component<
  CommentFormProps, { newCommentValue: string, focus: boolean }> {
  constructor(props: CommentFormProps) {
    super(props)
    this.state = {
      newCommentValue: '',
      focus: false
    }
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
                    onFocus={ () => { this.setState({ focus: true }) }}
                    onBlur={ () => { this.setState({ focus: false }) }}
                    onChange={event => { this.setState({ newCommentValue: event.target.value }) }}
                    placeholder={this.props.placeholder}
                    focused = {this.state.focus}
                  />
                  <SendButton
                    icon={ this.props.reply ? faReply : faArrowRight}
                    title="Abschicken"
                    active={this.state.focus}
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

    margin-top: 1rem;
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
    
    ${ props => props.focused ?  
      `
      min-height: 3rem;
      background: ${ lightenColor('brandGreen', 0.35) };
      `
      : null
    }
        
    transition: ${ getDefaultTransition() };
`

const SendButton = styled(IconButton) `    
    position: absolute;
    right: .6rem;
    bottom: .5rem;
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
    placeholder: string
    reply?: boolean
  }
