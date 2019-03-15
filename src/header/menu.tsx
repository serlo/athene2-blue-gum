import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '../fontawesome'
import { getColor, transparentizeColor } from '../provider.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Button, DropButton } from '../button.component'
import { faHeart } from '@fortawesome/free-solid-svg-icons'; //TODO: how is the best way to handle FA stuff while making sure we only load what we need

type Child = { title: string; url: string; icon?: string }
type Entry = { title: string; class?: string; icon?: string; url: string; children: Child[]; highlight:boolean }

export interface Props {
  links: Entry[]
  className?: string
}

export default function Menu( {links, className}: Props ) {

  return (
    <List className={className}>
      {links.map((entry, index) => {
        const icon =  entry.icon as IconProp

        if( !entry.title ) return (null) //seperator
        return (
            <Entry
              key={"_"+index}
              href={entry.url}
              icon={icon}
              title={entry.title}
              children={entry.children}
              highlight={entry.highlight}
            />
        )
      })}
    </List>
  )
}


interface EntryProps {
  href: string,
  title: string,
  key: string,
  icon: IconProp,
  isChild?: boolean,
  children?: Child[]
}


function Entry({href, title, key, icon, isChild, children, highlight}: EntryProps){
  return (
    <Li>
        <Link
          label={ !children ? title : <React.Fragment>{title}&thinsp;<FontAwesomeIcon icon={"caret-down"} /></React.Fragment> } 
          size={1.1}
          href={href}
          key={key}
          iconName={icon? icon : undefined}
          active = { highlight ? true :  false }

          backgroundColor= { highlight ? getColor("brandGreen") : "transparent" }
          fontColor={ highlight ? "#fff" : getColor("brand") }
          activeBackgroundColor={ highlight ? getColor("brand") : "transparent" }
          activeFontColor="#fff"
          iconColor={ highlight ? "#fff" : getColor("lightblue") }
          activeIconColor="#fff"

          as={!children ? Button : DropButton}
          a11yTitle={children ? ("Untermenü " + title + " öffnen") : title }
          dropContent={children ? <Submenu entries={children} /> : undefined }
          dropAlign={children ?  {"top": "bottom", "right": "right" } : undefined }
        />
    </Li>
  )
}

function Submenu({entries}: {entries: Child[]}) {

  return(
    <ul>
      { entries.map((entry, index) => {
        if( !entry.title ) return (null) //seperator
        return (
            <Entry
              key={"__"+index}
              href={entry.url}
              icon={entry.icon}
              title={entry.title}
            />
        )
      })}
    </ul>
   
  )
}


const List = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: right;

  .Collapsible__trigger.is-open li a{
    background: ${ transparentizeColor('brand',0.8) };
  }
`

const Li = styled.li `
  display: inline-block;
`

const Link = styled(Button)`
  margin-top: .7rem;
  margin-right: .6rem;
`