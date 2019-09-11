import React from 'react'
import {Link} from 'react-router-dom'
import HpgModal from './hpgModal'

export default function AboutPage() {
  const contactStyle = {
    display: 'flex',
    width: '40%'
  }
  return (
    <div>
      <HpgModal page="about" />

      <h1>ABOUT US</h1>
      <p>
        Two women navigate unemployment in the tech world, will they survive
        with only a resume and the internet to guide them? Or will they be
        destroyed by ravenous algorithm challenges that threaten to eat them
        alive? Tune in as they interview champions of the job hunt and employed
        software engineers with unconventional backgrounds willing to impart
        wisdom, advice, and tricks of the trade.
      </p>
    </div>
  )
}
