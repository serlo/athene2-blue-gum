import * as React from 'react'
import { getColor, lightenColor } from './provider.component'
import { Heading } from './heading.component'
import useWindowSize from '@rehooks/window-size'
import styled from 'styled-components'
import {
  faGraduationCap,
  faBars,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import { Box, Grid } from 'grommet'
import { Button } from './button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Course(props) {
  // Layoutstrategie: Auf kleinen Bildschirmen Anzeige oberhalb
  // Auf größeren Bildschirmen links am Rand
  let [isExpanded, setExpanded] = React.useState(false)
  if (useWindowSize().innerWidth < 840) {
    return (
      <React.Fragment>
        <CollapsedCourseOverview>
          <Box margin="large" justify="center">
            <OverviewTitle {...props} />
            {!isExpanded ? (
              <Button
                backgroundColor={getColor('lightblue')}
                alignSelf="start"
                label="Kursübersicht anzeigen"
                margin={{ top: 'medium', bottom: 'medium' }}
                iconName={'faBars'}
                onClick={() => {
                  setExpanded(true)
                }}
              />
            ) : (
              <CourseList {...props} />
            )}
          </Box>
        </CollapsedCourseOverview>
        <Box justify="center" margin={{ left: 'large', right: 'large' }}>
          <CourseContent>
            <PageTitle {...props} /> {props.children} <NextButton />
          </CourseContent>
        </Box>
      </React.Fragment>
    )
  } else {
    return (
      <Grid columns={['250px', '2/4']}>
        <Box margin="small">
          <CollapsedCourseOverview>
            <OverviewTitle {...props} />
            <Box margin="small" justify="start">
              <CourseList {...props} />
            </Box>
          </CollapsedCourseOverview>
        </Box>
        <Box margin="small">
          <div>
            <PageTitle {...props} />
            {props.children}
            <NextButton />
          </div>
        </Box>
      </Grid>
    )
  }
}

const PageTitle = props => {
  return (
    <Heading level={'1'}>
      <HeadingNumber>{props.currentPage}.</HeadingNumber>{' '}
      {props.pages[props.currentPage - 1]}
    </Heading>
  )
}

const OverviewTitle = props => {
  return (
    <Heading level={'3'} icon={faGraduationCap}>
      {props.courseTitle}
    </Heading>
  )
}

const NextButton = () => {
  return (
    <div style={{ marginTop: '2rem', float: 'right' }}>
      <Button
        backgroundColor={getColor('brand')}
        reverse
        iconName={'faArrowCircleRight'}
        label="Weiter"
      />
    </div>
  )
}

const CollapsedCourseOverview = styled.div`
  background-color: ${getColor('lightBackground')};
  width: 100%;

  h3 {
    margin: 1.2em 0.3em 0;
    max-width: none;
  }
`
const CourseList = props => {
  return (
    <StyledCourseList>
      {props.pages.map((title, index) => (
        <li
          key={index}
          className={index === props.currentPage - 1 ? 'active' : ''}
        >
          <a href="javascript:location.reload()">{title}</a>
        </li>
      ))}
    </StyledCourseList>
  )
}

const StyledCourseList = styled.ul`
  counter-reset: list-counter;
  list-style-type: none;

  li {
    &:before {
      content: counter(list-counter);
      counter-increment: list-counter;
      margin-left: -1.5em;
      position: absolute;
      color: ${lightenColor('brand', 0.3)};
    }

    padding: 0.3em 0;
  }

  li a {
    color: ${getColor('brand')};
  }

  a {
    text-decoration: none;
  }

  li.active a {
    color: black;
  }
`

const CourseContent = styled.div`
  h1 {
    margin: 0.3em 0 1em;
  }
`

const HeadingNumber = styled.span`
  color: ${getColor('lighterblue')};
`
