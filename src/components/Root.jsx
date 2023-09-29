import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <Nav />
        <main>
            <Outlet />
        </main>

    </div>
  )
}

export default Root