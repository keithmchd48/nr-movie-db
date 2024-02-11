import React from 'react'
import assets from '../utils/assets'

const Header = () => {
  return (
    <div className="px-4 py-4 sm:py-6">
      <img alt="main_logo" src={assets.mainLogo} className="h-16 sm:h-20"></img>
    </div>
  )
}

export default Header