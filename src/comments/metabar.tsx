import * as React from 'react'
import styled from 'styled-components'
import { Box, Anchor } from 'grommet'
import { Button, DropButton } from '../button.component'
import * as moment from 'moment'
import { getColor } from '../provider.component'

const renderItems = ( leaf: boolean | undefined, timestamp : Date ) => (
  <DropContent>
    {leaf ? null : (
      <DropContentButton 
        label="Diskussion archivieren"
        iconName="check"
        backgroundColor="transparent"
        activeBackgroundColor={getColor('lightblue')}
        fontColor={getColor('darkGray')}
      />
    )}
    <DropContentButton 
      label="Diskussion melden"
      iconName="flag"
      backgroundColor="transparent"
      activeBackgroundColor={getColor('lightblue')}
      fontColor={getColor('darkGray')}
    />
    <DropContentButton 
      label="Diskussion löschen"
      iconName="trash"
      backgroundColor="transparent"
      activeBackgroundColor={getColor('lightblue')}
      fontColor={getColor('darkGray')}
    />
    <Time>Gepostet am {moment(timestamp)
            .locale('de')
            .format('DD.MM.YYYY, HH:mm:ss ')}
    </Time>

  </DropContent>
)

export default function MetaBar({author, timestamp, leaf}:{author: any, timestamp: Date, leaf: boolean | undefined}) {
  return (
    <MetaBarBox direction="row" justify="between">
      <Button
        label={author.username}
        iconName="user-graduate"
        href={`https://serlo.org/${author.id}`}
        backgroundColor="transparent"
        activeBackgroundColor={getColor('lightblue')}
        fontColor={getColor('brand')}
        style={{fontWeight: 'bold'}}
      />
      <span>
        <StyledDropButton
          dropAlign={{ top: 'bottom', right: 'right' }}
          dropContent={renderItems(leaf, timestamp)}
          iconName='caret-down'
          fontColor={getColor('lighterblue')}
          activeFontColor={'#fff'}
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
  margin-bottom: .2rem;
` as typeof Button

const MetaBarBox = styled(Box) `
  color: #222;
  margin-bottom: .3rem;
` as typeof Box

const StyledDropButton = styled(DropButton) `
  >svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`