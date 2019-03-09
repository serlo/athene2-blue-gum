import * as React from 'react'
import { Box, Button, Heading, Text, Accordion, AccordionPanel } from 'grommet'
import styled from 'styled-components'
import { FontAwesomeIcon } from '../fontawesome'
import { getColor, transparentizeColor, lightenColor } from '../provider.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Collapsible from 'react-collapsible';


// type Child = { title: string; url: string; icon?: IconProp }
// type Entry = { title: string; class?: string; children: Child[] }
// export interface Props {
//   links: Entry[]
// }

const topNavLinks = [
  { title: '', class: 'seperator'},
  { title: 'Neu hier?', url: '#', icon: 'question-circle' },
  { title: 'Anmelden', url: '#', icon: 'user-circle' },
  { title: '', class: 'seperator'},
  { title: 'Lernen', url: '#', icon: 'arrow-circle-right' },
  { title: 'Was ist Serlo?', url: '#', icon: 'newspaper', children: [
      {title: 'Action', url: '#'},
      {title: 'Test', url: '#'},
      {title: 'Längerer Eintrag', url: '#'},
  ]},
  { title: 'Spenden', url: '#', class: 'donate', icon: 'hand-holding-heart' },
]

export default function MobileMenu({ onClose, className }: { onClose: () => void }) {
    return (
      <MobileMenuOverlay className={className}>

        <List>
          {topNavLinks.map((header, index) => {
            let children = []
            if(header.children){
              children = header.children.map((link, index) => {
                return <Entry key={index} isChild href="test" icon={header.icon} title={header.title}/>
              })
              children.push(<Seperator />)
            }
            if( !header.title ) return (<Seperator />)
            else if(children.length>0) return(
              <Collapsible
                trigger={<Entry key={index} href="test" icon={header.icon} hasChildren title={header.title}/>}
                transitionTime={200}  
              >
                {children}
              </Collapsible>

            )
            else return (
                <Entry key={index} href="test" icon={header.icon} title={header.title}/>
            )
          })}
        </List>
      </MobileMenuOverlay>
    )
  }
  


function Entry({href, title, key, icon, hasChildren, isChild}){
  return (
    <li><EntryLink key={key} href={href} isChild={isChild}>
      
      { !isChild ?
        <IconWrapper>
          <FontAwesomeIcon icon={icon}/>
        </IconWrapper>
      : null }
      <EntryLinkText isChild={isChild}>
        {title}
        { hasChildren ?
          <span> <FontAwesomeIcon icon={"caret-down"} /></span>
        : null }
      </EntryLinkText>
    </EntryLink></li>
  )
}


const EntryLinkText = styled.span `
  display: inline-block;
  vertical-align: middle;
  margin-top: ${ props => props.isChild ? '0' : '1rem' };
`

const List = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;

  .Collapsible__trigger.is-open li a{
    background: ${ transparentizeColor('brand',0.8) };
  }
`

const Seperator = styled.li `
  height: 5rem;
  border-bottom: 1px solid ${ getColor('lighterblue') };
`

const EntryLink = styled.a `
  background-color: ${ getColor('bluewhite') };
  display: block;
  padding: 1em;
  color: ${ getColor('brand') };
  border-bottom: 1px solid;
  border-color: ${ getColor('lighterblue') };
  font-weight: bold;
  text-decoration: none;
  font-size: ${ props => props.isChild ? '1.33rem' : '1.66rem'};

  &:hover, &:focus, &:active{
    background: ${ transparentizeColor('brand',0.8) };
  }

  &.is-open {
    color: red !important;
  }

`
const StyledCollapsible = EntryLink.withComponent(Collapsible);

const IconWrapper = styled(Box) `
  width: 5em;
  height: 5em;
  background-color: #D7EBF4;
  border-radius: 10em;
  display: inline-block;
  color: ${ getColor('lightblue') };
  text-align: center;
  margin-right: 1em;

  svg {
    margin-top: 1em;
    width: 3em !important;
    height: 3em !important;
    vertical-align: middle;
  }
`

const MobileMenuOverlay = styled(Box) `

    /* height: calc(100vh - 11.5rem);
    // maxHeight: calc(100vh - 11.5rem);
    // overflow: auto; */
    /* overflow: visible; */
` 
// as typeof Box
  