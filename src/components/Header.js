import React from 'react'
import assets from '../utils/assets'

const Header = () => {
  return (
    <div className="px-8 py-6">
      <img alt="main_logo" src={assets.mainLogo} className="h-20"></img>
    </div>
  )
}

export default Header