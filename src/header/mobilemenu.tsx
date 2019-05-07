import * as React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'
import { Icon } from '../icon.component'
import {
  getColor,
  transparentizeColor,
  getBreakpoint
} from '../provider.component'
import Collapsible from 'react-collapsible'
import { MobileMenuButton as Button } from './mobilemenubutton'

type Child = { title: string; url: string; icon?: string }
type Entry = { title: string; class?: string; icon?: string; children: Child[] }

export interface Props {
  links: Entry[]
  overlayTarget: object
  className?: string
}

/* TODO: Replace Grommet DropButton with own code
 so we can easily change the styling of the overlay and also load the overlay inside of the header
 -> this way we can make the header 100% VP-Height and scroll inside this box. */

export default function MobileMenu({ overlayTarget, links, className }: Props) {
  const [open, toggleOpen] = useToggle(false)

  return (
    <div className={className}>
      <Button
        onClick={toggleOpen}
        open={open}
        dropContent={<Overlay links={links} onClose={toggleOpen} />}
        dropTarget={overlayTarget}
      />
    </div>
  )
}

function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue)

  return [
    value,
    () => {
      setValue(!value)
    }
  ]
}

function Overlay({
  links,
  onClose,
  className
}: {
  links: Entry[]
  onClose: () => void
  className?: string
}) {
  return (
    <OverlayBox className={className}>
      <List>
        {links.map((header, index) => {
          let children = []
          const key = 'mn_' + index
          const icon = header.icon

          if (header.children) {
            children = header.children.map((link, index) => {
              return (
                <Entry
                  key={key + '_child' + index}
                  isChild
                  href="test"
                  icon={icon}
                  title={header.title}
                />
              )
            })
            children.push(<Seperator />)
          }
          if (!header.title) return <Seperator />
          else if (children.length > 0)
            return (
              <Collapsible
                trigger={
                  <Entry
                    key={key}
                    href="test"
                    icon={icon}
                    hasChildren
                    title={header.title}
                  />
                }
                transitionTime={200}
              >
                {children}
              </Collapsible>
            )
          else
            return (
              <Entry key={key} href="test" icon={icon} title={header.title} />
            )
        })}
      </List>
    </OverlayBox>
  )
}

interface EntryProps {
  href: string
  title: string
  key: string
  icon: string
  hasChildren?: boolean
  isChild?: boolean
}

function Entry({ href, title, key, icon, hasChildren, isChild }: EntryProps) {
  return (
    <li>
      <EntryLink key={key} href={href} isChild={isChild}>
        {!isChild ? (
          <IconWrapper>
            <Icon icon={icon} />
          </IconWrapper>
        ) : null}
        <EntryLinkText isChild={isChild}>
          {title}
          {hasChildren ? (
            <span>
              {' '}
              <Icon icon="faCaretDown" />
            </span>
          ) : null}
        </EntryLinkText>
      </EntryLink>
    </li>
  )
}

const EntryLinkText = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-top: ${({ isChild }: { isChild?: boolean }) =>
    isChild ? '0' : '1rem'};
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  .Collapsible__trigger.is-open li a {
    background: ${transparentizeColor('brand', 0.8)};
  }
`

const Seperator = styled.li`
  height: 1.5rem;
  border-bottom: 1px solid ${getColor('lighterblue')};
`

const EntryLink = styled.a`
  background-color: ${getColor('bluewhite')};
  display: block;
  padding: 1em;
  color: ${getColor('brand')};
  border-bottom: 1px solid;
  border-color: ${getColor('lighterblue')};
  font-weight: bold;
  text-decoration: none;
  font-size: ${({ isChild }: { isChild?: boolean }) =>
    isChild ? '1rem' : '1.33rem'};

  &:hover,
  &:focus,
  &:active {
    background: ${transparentizeColor('brand', 0.8)};
  }

  &.is-open {
    color: red !important;
  }
`

const IconWrapper = styled(Box)`
  width: 2.5em;
  height: 2.5em;
  background-color: #d7ebf4;
  border-radius: 10em;
  display: inline-block;
  color: ${getColor('lightblue')};
  text-align: center;
  margin-right: 1em;

  svg {
    margin-top: 0.5em;
    width: 1.5em !important;
    height: 1.5em !important;
    vertical-align: middle;
  }
` as typeof Box

const OverlayBox = styled(Box)`
  @media screen and (min-width: ${getBreakpoint('sm')}) {
    display: none !important;
  }
  /* height: calc(100vh - 11.5rem);
    // maxHeight: calc(100vh - 11.5rem);
    // overflow: auto; */
  /* overflow: visible; */
` as typeof Box
