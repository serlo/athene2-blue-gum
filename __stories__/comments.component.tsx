import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Comments } from '../src/comments.component'
import { Provider } from '../src/provider.component'

storiesOf('Comments', module).add('default', () => {
  return (
    <Provider>
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
              id: 12345,
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
                  id: 54321,
                  username: 'Nish'
                },
                timestamp: new Date()
              }
            ]
          }
        ]}
      />
    </Provider>
  )
})
