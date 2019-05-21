import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Normalize } from 'styled-normalize'
import { Provider, GlobalStyle } from '../src/provider.component'

import {
  Grommet,
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Calendar,
  Chart,
  CheckBox,
  Clock,
  DataTable,
  Diagram,
  Distribution,
  FormField,
  Grid,
  Heading as GrommetHeading,
  Menu,
  Meter,
  Paragraph,
  RadioButton,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Tab,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Video,
  Image
} from 'grommet'

import { grommet } from 'grommet/themes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background="light-4"
    {...rest}
  />
)

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  color: color || 'accent-1',
  thickness: 'xsmall',
  round: true,
  type: 'rectilinear',
  ...rest
})

const themes = {
  grommet
}

class Components extends React.Component {
  state = {
    checkBox: true,
    radioButton: true,
    rangeSelector: [1, 2]
  }

  render() {
    const {
      // baseSize,
      checkBox,
      radioButton,
      rangeSelector,
      tabIndex
      // themeName
    } = this.state
    //const theme = deepMerge(generate(baseSize), themes[themeName]);
    // const theme = this.props.theme

    const content = [
      <Box key="type" align="start">
        <h2>Grommet Components, don't use</h2>
        <GrommetHeading margin={{ top: 'none' }}>Heading</GrommetHeading>
        <Paragraph>Paragraph</Paragraph>
        <Text>Text</Text>
        <Anchor href="">Anchor</Anchor>
        <Menu
          label="Menu"
          items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]}
        />
        <p>
          <Button label="Secondary" secondary onClick={() => {}} />
        </p>
        <p>
          <Button label="Primary" primary onClick={() => {}} />
        </p>
        <p>
          <Button
            label="Icon"
            icon={<FontAwesomeIcon icon={faHeart} />}
            primary
            onClick={() => {}}
          />
        </p>
        <p>
          <Button
            label="Reverse"
            secondary
            reverse
            icon={<FontAwesomeIcon icon={faArrowCircleRight} />}
            onClick={() => {}}
          />
        </p>
        <p>
          <Button label="Green" primary color="brandGreen" onClick={() => {}} />
        </p>
      </Box>,
      <Box key="input" gap="small">
        <Select
          placeholder="Select"
          options={['One', 'Two']}
          onChange={() => {}}
        />
        <CheckBox
          name="check"
          checked={checkBox}
          label="CheckBox"
          onChange={event => this.setState({ checkBox: event.target.checked })}
        />
        <CheckBox
          name="toggle"
          toggle
          checked={checkBox}
          label="CheckBox toggle"
          onChange={event => this.setState({ checkBox: event.target.checked })}
        />
        <RadioButton
          name="radio"
          checked={radioButton}
          label="RadioButton"
          onChange={event =>
            this.setState({ radioButton: event.target.checked })
          }
        />
        <TextInput placeholder="TextInput" />
        <TextArea placeholder="TextArea" />
        <RangeInput value={24} onChange={() => {}} />
        <Stack>
          <Box direction="row" justify="between">
            {[0, 1, 2, 3].map(value => (
              <Box key={value} pad="small">
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction="horizontal"
            invert={false}
            min={0}
            max={3}
            size="full"
            round="small"
            values={rangeSelector}
            onChange={values => this.setState({ rangeSelector: values })}
          />
        </Stack>
        <FormField label="FormField">
          <TextInput placeholder="TextInput" />
        </FormField>
      </Box>,
      <Box key="time" gap="medium">
        <Calendar size="small" />
        <Clock type="digital" />
        <Clock />
      </Box>,
      <Box key="measure" gap="medium">
        <Chart
          type="bar"
          round
          size="small"
          values={[
            { value: [10, 20] },
            { value: [20, 30] },
            { value: [30, 15] }
          ]}
        />
        <Meter
          type="bar"
          round
          size="small"
          background="light-3"
          values={[{ value: 30 }]}
        />
      </Box>,
      <Box key="visualize" gap="small">
        <Distribution
          basis="small"
          values={[
            { value: 50, color: 'light-3' },
            { value: 30, color: 'accent-1' },
            { value: 20, color: 'light-4' },
            { value: 10, color: 'light-3' },
            { value: 5, color: 'light-4' }
          ]}
        >
          {value => (
            <Box pad="xsmall" background={value.color} fill>
              <Text size="large">{value.value}</Text>
            </Box>
          )}
        </Distribution>
        <Stack>
          <Box>
            <Box direction="row">
              {[1, 2].map(id => (
                <Node key={id} id={id} />
              ))}
            </Box>
            <Box direction="row">
              {[3, 4].map(id => (
                <Node key={id} id={id} />
              ))}
            </Box>
          </Box>
          <Diagram connections={[connection('1', '4')]} />
        </Stack>
      </Box>,
      <Box key="dataTable" alignSelf="start">
        <DataTable
          columns={[
            { property: 'name', header: 'Name' },
            { property: 'color', header: 'Color' }
          ]}
          data={[
            { name: 'Alan', color: 'blue' },
            { name: 'Chris', color: 'purple' },
            { name: 'Eric', color: 'orange' }
          ]}
          sortable
        />
      </Box>,
      <Box key="accordion">
        <Accordion>
          <AccordionPanel label="Accordion Panel 1">
            <Box pad="small">
              <Text>Accordion panel 1 content</Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Accordion Panel 2">
            <Box pad="small">
              <Text>Accordion panel 2 content</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>,
      <Box key="tabs">
        <Tabs
          activeIndex={tabIndex}
          onActive={index => this.setState({ tabIndex: index })}
        >
          <Tab title="Tab 1">
            <Box pad="small">
              <Text>Tab 1 content</Text>
            </Box>
          </Tab>
          <Tab title="Tab 2">
            <Box pad="small">
              <Text>Tab 2 content</Text>
            </Box>
          </Tab>
        </Tabs>
      </Box>,
      <Box key="video" alignSelf="start">
        <Video>
          <source
            src="http://techslides.com/demos/sample-videos/small.webm"
            type="video/webm"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.ogv"
            type="video/ogg"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.mp4"
            type="video/mp4"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.3gp"
            type="video/3gp"
          />
        </Video>
      </Box>
    ]

    return (
      <Provider>
        <Normalize />
        <GlobalStyle />

        <Box pad="medium" overflow="auto">
          {Grid.available ? (
            <Grid columns="small" gap="medium">
              {content}
            </Grid>
          ) : (
            <Box direction="row" wrap align="start" gap="large">
              {content}
            </Box>
          )}
        </Box>
      </Provider>
    )
  }
}

storiesOf('*(Grommet)', module)
  .add('(All)', () => <Components />)
  .add('(Buttons)', () => (
    <Provider>
      <Normalize />
      <GlobalStyle />
      <Box pad="medium" width="small">
        <h2>Grommet Buttons, don't use</h2>
        <Button label="Secondary" secondary onClick={() => {}} />
        <br />
        <Button label="Primary" primary onClick={() => {}} />
        <br />
        <Button
          label="Icon"
          icon={<FontAwesomeIcon icon={faHeart} />}
          primary
          onClick={() => {}}
        />
        <br />
        <Button
          label="Reverse"
          secondary
          reverse
          icon={<FontAwesomeIcon icon={faArrowCircleRight} />}
          onClick={() => {}}
        />
        <br />
        <Button label="Green" primary color="brandGreen" onClick={() => {}} />
        <br />
        <Button icon={<FontAwesomeIcon icon={faHeart} />} onClick={() => {}} />
        <br />
      </Box>
    </Provider>
  ))
