import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={` w-full h-full z-0 bg-white max-xl:p-24 max-lg:p-16 max-md:p-12 max-sm:p-8 p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
