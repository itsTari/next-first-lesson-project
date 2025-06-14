
import React from 'react'

const DashboardNavbar = ({children} : {children:React.ReactNode}) => {
  return (
    <>
    <div className='text-2xl text-red-400'> hello Dashboard Navbar</div>
    <div>{children}</div>
    </>
  )
}

export default DashboardNavbar