import { Box, Button, Heading } from 'grommet'
import * as React from 'react'

export function Comments({ data }: CommentsProps) {
  return (
    <React.Fragment>
      <Box pad="medium">
        <Heading level="2">Kommentare</Heading>
        <Button label="Kommentar abschicken" primary />
        {data ? data.map((comment) => {
          return <Comment key={comment.id} {...comment} />
        }) : null}
      </Box>
    </React.Fragment>
  )
}

function Comment({ author, body, children, timestamp, leaf }: CommentProps) {
  return (
    <React.Fragment>
      <Box pad="medium">
        <Heading level="3">Autor: {author.username}, {timestamp.toString()}</Heading>
        {body}
        {children && !leaf ? children.map((comment) => {
          return <Comment key={comment.id} leaf {...comment} />
        }) : null}
        {leaf ? null : <Button label="Antwort abschicken" primary />}
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
  id: string,
  author: User,
  body: string,
  children?: Comment[],
  timestamp: Date
}

interface User {
  id: number,
  username: string
}
