import { Box, Button, Heading } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

const outerBorderColor = '#2e6da4'
const innerBorderColor = '#46b8da'
const BoxStyle = styled(Box)({
  height: '10px',
  border: `5px solid ${outerBorderColor}`,
  borderTop: `0px `
})
const TextareaStyle = styled(TextareaAutosize)({
  border: 'none',
  outline: 'none',
  overflow: 'hidden',
  resize: 'none'
})

export function Comments({ data }: CommentsProps) {
  return (
    <React.Fragment>
      <Box pad="medium">
        <Heading level="2">Kommentare</Heading>
        <Box margin={{ bottom: 'medium' }}>
          <TextareaStyle />
          <BoxStyle />
        </Box>
        <Button label="Kommentar abschicken" primary />
        {data
          ? data.map(comment => {
              return <Comment key={comment.id} {...comment} />
            })
          : null}
      </Box>
    </React.Fragment>
  )
}

function Comment({ author, body, children, timestamp, leaf }: CommentProps) {
  return (
    <React.Fragment>
      <Box
        pad={{ horizontal: 'medium' }}
        margin={{ vertical: 'small' }}
        border={{
          side: 'right',
          color: leaf ? innerBorderColor : outerBorderColor,
          size: 'medium'
        }}
      >
        <Heading level="3">
          Autor: {author.username}, {timestamp.toString()}
        </Heading>
        {body}
        {children && !leaf
          ? children.map(comment => {
              return <Comment key={comment.id} leaf {...comment} />
            })
          : null}
        {leaf ? null : (
          <React.Fragment>
            <Box margin={{ bottom: 'medium' }}>{/* <TextArea  /> */}</Box>
            <Button label="Antwort abschicken" primary />
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  )
}

interface CommentsProps {
  data: Comment[]
}

interface CommentProps extends Comment {
  leaf?: boolean
}

interface Comment {
  id: string
  author: User
  body: string
  children?: Comment[]
  timestamp: Date
}

interface User {
  id: number
  username: string
}
