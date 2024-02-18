import React from 'react'
import assets from '../utils/assets'
import {logoutUser} from '../utils/firebase'

const Header = () => {
  return (
    <div className="px-4 py-4 sm:py-6 flex justify-between items-center">
      <img alt="main_logo" src={assets.mainLogo} className="h-16 sm:h-20"></img>
      <button onClick={logoutUser} className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign out</button>
    </div>
  )
}

export default Header