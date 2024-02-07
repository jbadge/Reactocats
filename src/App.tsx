import React from 'react'
import { Octocat } from './components/Octocat'
import { OctoHeader } from './components/OctoHeader'
import { OctoFooter } from './components/OctoFooter'
import octocats from './octocats.json'

export function App() {
  const octocatsFromData = octocats.map((octocat) => (
    <Octocat
      key={octocat.id}
      name={octocat.name}
      image={octocat.image}
      number={octocat.number}
      author={octocat.author}
    />
  ))

  return (
    <div>
      <OctoHeader />

      <div className="wrapper">{octocatsFromData}</div>

      <OctoFooter />
    </div>
  )
}
