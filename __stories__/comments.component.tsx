import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Comments } from '../src/comments'
import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'
import { action, configureActions } from '@storybook/addon-actions'

import { UserContext, EntityContext } from '../src/context'

storiesOf('Comments', module).add('default', () => {
  return (
    <UserContext.Provider value={{ user: { id: '1', username: 'aeneas' } }}>
      <EntityContext.Provider
        value={{ entity: { id: '1234', label: 'Aufgabe' } }}
      >
        <Provider>
          <Normalize/>
          <GlobalStyle/>
          <Comments
            data={[
              {
                id: '1',
                body: `
              Hallo Serlo-Team,

              die erste Aufgabe im Subtraktionsblock hat ein Eingabefeld, der die Message "Type Answer" anzeigt. Außerdem wird das Feedback auch auf Englisch angezeigt ( = "wrong.")
              Wie kann man solche Stellen bearbeiten?

              Liebe Grüße
              Sebastian
            `,
                author: {
                  id: '12345',
                  username: 'SebSoGa'
                },
                timestamp: new Date(),
                children: [
                  {
                    id: '2',
                    body: `
                  Du kannst nicht diese Stelle allein bearbeiten. Das muss allgemein bei diesen Typen von Aufgaben geändert werden. Ich weiß gerade nur nicht wo und ob es jeder kann. Evtl. wurde es schon geändert... Kannst du mal bei Benni/Simon diesbezüglich nachfragen?

                  LG,
                  Nish
                `,
                    author: {
                      id: '54321',
                      username: 'Nish'
                    },
                    timestamp: new Date()
                  },
                  {
                    id: '2',
                    body: `
                  Du kannst nicht diese Stelle allein bearbeiten. Das muss allgemein bei diesen Typen von Aufgaben geändert werden. Ich weiß gerade nur nicht wo und ob es jeder kann. Evtl. wurde es schon geändert... Kannst du mal bei Benni/Simon diesbezüglich nachfragen?

                  LG,
                  Nish
                `,
                    author: {
                      id: '54321',
                      username: 'Nish'
                    },
                    timestamp: new Date()
                  }
                ],
                entity: { id: '1234', label: 'Aufgaben' }
              },
              {
                id: '2',
                body: `
              Hallo Serlo-Team,

              die erste Aufgabe im Subtraktionsblock hat ein Eingabefeld, der die Message "Type Answer" anzeigt. Außerdem wird das Feedback auch auf Englisch angezeigt ( = "wrong.")
              Wie kann man solche Stellen bearbeiten?

              Liebe Grüße
              Sebastian
            `,
                author: {
                  id: '12345',
                  username: 'SebSoGa'
                },
                timestamp: new Date('October 13, 2014 11:13:00'),
                children: [
                  {
                    id: '2',
                    body: `
                  Du kannst nicht diese Stelle allein bearbeiten. Das muss allgemein bei diesen Typen von Aufgaben geändert werden. Ich weiß gerade nur nicht wo und ob es jeder kann. Evtl. wurde es schon geändert... Kannst du mal bei Benni/Simon diesbezüglich nachfragen?

                  LG,
                  Nish
                `,
                    author: {
                      id: '54321',
                      username: 'Nish'
                    },
                    timestamp: new Date(2018, 4, 21, 3, 23, 34)
                  }
                ],
                entity: { id: '12345', label: 'Aufgaben2' }
              }
            ]}
            onSendComment={(params: any) => console.log(params)}
          />
        </Provider>
      </EntityContext.Provider>
    </UserContext.Provider>
  )
})
