import React from 'react'

const rootNavbar = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3xl'>root Navbar</h1>
        {children}
    </div>
  )
}

export default rootNavbar