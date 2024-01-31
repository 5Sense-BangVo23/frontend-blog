import React from 'react'
import '../Content/style.css'
import { Panel } from '../Panel/Panel'
import { Clock } from '../Clock/Clock'
import { Calendar } from '../Calendar/Calendar'


export const Content = () => {
  const panelChilds = [
    { position: 1, content: <div><Clock /></div> },
    { position: 2, content: <div><Calendar /></div>, special: true },
    { position: 3, content: <div></div> },
  ];
  return (
    <main>
        <Panel panelChilds={panelChilds} />
    </main>
  )
}
