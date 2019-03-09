import * as React from 'react'
import styled from 'styled-components'
import { Box, Button, Anchor, DropButton } from 'grommet'
import * as moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faFlag, faCheck, faTrash, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { getColor } from '../provider.component'

const renderItems = ( leaf: boolean | undefined, timestamp : Date ) => (
  <DropContent>
    {leaf ? null : (
      <DropContentButton>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ padding: '5px 5px 0px 5px' }}
          size="xs"
        />
        Diskussion archivieren
      </DropContentButton>
    )}
    <DropContentButton>
      <FontAwesomeIcon
        icon={faFlag}
        style={{ padding: '5px 5px 0px 5px' }}
        size="xs"
      />
      Diskussion melden
    </DropContentButton>
    <DropContentButton>
      <FontAwesomeIcon
        icon={faTrash}
        style={{ padding: '5px 5px 0px 5px' }}
        size="xs"
      />
      Diskussion löschen
    </DropContentButton>

    <Time>Gepostet am {moment(timestamp)
            .locale('de')
            .format('DD.MM.YYYY, HH:mm:ss ')}
    </Time>

  </DropContent>
)

export default function MetaBar({author, timestamp, leaf}:{author: any, timestamp: Date, leaf: boolean | undefined}) {
  return (
    <MetaBarBox direction="row" justify="between">
      <Anchor href={`https://serlo.org/${author.id}`}>
        <FontAwesomeIcon icon={faUserGraduate} />
        {' '}
        {author.username}
      </Anchor>{' '}
      <span>
        <StyledDropButton
          dropAlign={{ top: 'bottom', right: 'right' }}
          dropContent={renderItems(leaf, timestamp)}
          icon={<FontAwesomeIcon icon={faCaretDown} />}
          reverse
          label={moment(timestamp)
            .locale('de')
            .startOf()
            .fromNow()}
        />
      </span>
    </MetaBarBox>
  )
}


const Time = styled.span `
  font-size: .65rem;
  text-align: center;
  color: ${ getColor('lighterblue') };
  margin-top: 1rem;
`

const DropContent = styled(Box) `
  background-color: ${ getColor('bluewhite') };
  padding: 1rem .5rem .5rem .5rem;
` as typeof Box

const DropContentButton = styled(Button) `
  padding: .15rem;
  &:hover {
    color: #fff;
  }
` as typeof Button

const MetaBarBox = styled(Box) `
  color: #222;
  margin-bottom: .3rem;
` as typeof Box

const StyledDropButton = styled(DropButton) `
  cursor: context-menu;
  padding: .15rem;
  color: ${getColor('lighterblue')};
  &:hover, &:focus{
    color: #fff;
    background: ${getColor('lightblue')}
  }
` as typeof DropButton