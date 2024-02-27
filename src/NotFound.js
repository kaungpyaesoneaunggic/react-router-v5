import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>Couldn't find the page</p>
      <Link to='/'>Back to the homepage...</Link>
    </div>
  )
}
