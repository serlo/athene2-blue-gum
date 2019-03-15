import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Provider, GlobalStyle, getColor } from '../src/provider.component'
import { Normalize } from 'styled-normalize'

import { UserContext, EntityContext } from '../src/context'

import { Grommet, Accordion, AccordionPanel, Anchor, Box, Button, Calendar, Chart, CheckBox, Clock, DataTable, Diagram, Distribution, FormField, Grid, Menu, Meter, Paragraph, RadioButton, RangeInput, RangeSelector, Select, Stack, Tab, Tabs, Text, TextArea, TextInput, Video, Image } from "grommet";

import { Heading } from '../src/heading.component'
import { List } from '../src/list.component'

import Logo from '../src/logo.component'
import LicenseInfo from '../src/licenseinfo.component'
import Subjects from '../src/landing/subjects'

import { faComments, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { faHeart, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


storiesOf("Content Components", module)
.add("(Images)", () =>
  <Provider>
    <Normalize/>
    <GlobalStyle/>
    <Box pad="medium" width="medium">
      <h3>Responsive Image (cover)</h3>
      <Image
        fit="cover"
        src="//assets.serlo.org/legacy/56d9f598ebea2_1581a51d8fbbce8e4abac1cb6793c714febe5a48.png"
      />
      <br />
      <h3>Image with caption</h3>
    </Box>
  </Provider>
)
.add("Headings", () =>
  <Provider>
    <Normalize/>
    <GlobalStyle/>
    <Box pad="medium">
      <b>No Icons:</b>
      <Heading level={1}>Heading level 1</Heading>
      <Heading level={2}>Heading level 2</Heading>
      <Heading level={3}>Heading level 3</Heading>
      <Heading level={4}>Heading level 4</Heading>
      <Heading level={5}>Heading level 5</Heading>
      <br/><br/>
      <b>With icons: </b>
      <Heading level={1} icon={faComments}>Heading level 1</Heading>
      <Heading level={2} icon={faComments}>Heading level 2</Heading>
      <Heading level={3} icon={faComments}>Heading level 3</Heading>
      <Heading level={4} icon={faComments}>Heading level 4</Heading>
      <Heading level={5} icon={faComments}>Heading level 5</Heading>
      <br/><br/>
      <b>Custom Color: </b>
      <Heading level={3} icon={faComments} color={getColor('brandGreen')}>Heading level 3</Heading>
    </Box>
  </Provider>
)
.add("Links", () =>
  <Provider>
    <Normalize/>
    <GlobalStyle/>
    <Box pad="medium">
      <p>⚓ Hi! I'm an <Anchor href="#">Anchor</Anchor>, but you can call me <b>Link</b> ⚓</p>
    </Box>
  </Provider>
)
.add("License Info", () =>
  <Provider>
    <Normalize/>
    <GlobalStyle/>
    <Box pad="medium" width="large">
      <LicenseInfo />
    </Box>
  </Provider>
)
.add("Lists", () =>
  <Provider>
    <Normalize/>
    <GlobalStyle/>
    <Box pad="medium">
      Fancy unordered list:
      <List>
        <li>Butter / Margarine</li>
        <li>Half & half</li>
        <li>Heavy cream</li>
        <li>Milk</li>
        <li>Sour cream</li>
        <li>Yogurt is no nice it <br /> should have two lines</li>
        <li>Whipped cream</li>
      </List>
    </Box>
    <Box pad="medium">
      Fancy ordered list:
      <List ordered>
        <li>Bacon / Sausage</li>
        <li>Beef</li>
        <li>Chicken</li>
        <li>Ground beef / Turkey</li>
        <li>Ham / Pork</li>
        <li>Hot dogs</li>
        <li>Lunchmet</li>
        <li>Multiline Turkey is the best <br/> absolute best </li>
        <li>Turkey</li>
        <li>Turkey</li>
        <li>Turkey</li>
      </List>
    </Box>
    <Box pad="medium">
      Fancy unstyled list:
      <List unstyled={true}>
        <li>Butter / Margarine</li>
        <li>Half & half</li>
        <li>Heavy cream</li>
        <li>Milk</li>
        <li>Sour cream</li>
        <li>Yogurt is no nice it <br /> should have two lines</li>
        <li>Whipped cream</li>
      </List>
    </Box>
  </Provider>
)
