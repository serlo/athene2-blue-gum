import { Box, Button, Heading, Text, Anchor } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import * as moment from 'moment'

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
  resize: 'none',
  paddingLeft: '10px',
  paddingRight: '10px'
})

const SpanStyle = styled.span({
  cursor: 'help',
  borderBottom: '1px dotted #777',
  color: '#979797'
})

export function Comments({ data }: CommentsProps) {
  return (
    <React.Fragment>
      <Box pad="medium">
        <Heading level="2">Kommentare</Heading>
        <Box margin={{ bottom: 'medium' }}>
          <TextareaStyle placeholder="Frage oder Verbesserungsvorschlag" />
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

function Comment({
  author,
  body,
  children,
  timestamp,
  leaf,
  entity
}: CommentProps) {
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
        {entity !== undefined ? (
          <Text>
            Zu{' '}
            <Anchor href={`https://serlo.org/${entity.id}`}>
              {entity.label}
            </Anchor>
            :
          </Text>
        ) : null}
        <Text margin="small" size={'85%'}>
          <Anchor href={`https://serlo.org/${author.id}`}>
            {' '}
            {author.username}
          </Anchor>{' '}
          <SpanStyle
            title={moment(timestamp)
              .locale('de')
              .format('DD.MM.YYYY, HH:mm:ss ')}
          >
            {moment(timestamp)
              .locale('de')
              .startOf()
              .fromNow()}
          </SpanStyle>
        </Text>
        {body}
        {children && !leaf
          ? children.map(comment => {
              return <Comment key={comment.id} leaf {...comment} />
            })
          : null}
        {leaf ? null : (
          <React.Fragment>
            <Box pad="medium">
              <TextareaStyle placeholder="Deine Antwort" />
              <BoxStyle />
            </Box>
            <Button
              margin={{ horizontal: 'medium' }}
              label="Antwort abschicken"
              primary
            />
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
  entity?: Entity
}

interface User {
  id: number
  username: string
}

interface Entity {
  id: number
  label: string
}
