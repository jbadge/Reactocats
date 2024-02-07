import React from 'react'

type OctocatProps = {
  name: string
  image: string
  number: string
  author: string
}
export function Octocat(props: OctocatProps) {
  return (
    <div className="entry post">
      <a href={'https://octodex.github.com/' + props.name}>
        <img
          src={'https://octodex.github.com/images/' + props.image}
          alt={props.name}
        />
      </a>

      <ul>
        <li>
          #{props.number}:{' '}
          <a href={'https://octodex.github.com/' + props.name}>
            <strong className="capitalize">{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={'https://github.com/' + props.author}>
            <img
              src={'https://github.com/' + props.author + '.png'}
              width="24px"
              height="24px"
              alt={props.author}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
