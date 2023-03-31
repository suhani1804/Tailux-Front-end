import React from 'react'
import Banner from '../components/Banner'
import Deal from '../components/Deal'
import Newarrival_W from '../components/Newarrival_W'
import Newarrival_M from '../components/Newarrival_M'
import Seasonal from '../components/Seasonal'
import Premium_Fab from '../components/Premium_Fab'
import Recent from '../components/Recent'

export default function Content() {
  return (
    <div>
      <Banner/>
      <Deal/>
      <Seasonal/>
      <Newarrival_W/>
      <Newarrival_M/>
      <Premium_Fab/>
      <Recent/>
    </div>
  )
}
