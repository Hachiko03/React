import React, { Children } from 'react'

export default function Container({title,children}) {
  return (
      <div className='container'>
          <div>{ title }</div>{ children }</div>
  )
}
