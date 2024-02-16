import React from 'react'
import Header from './Header'
import assets from '../utils/assets'
import GenericForm from './GenericForm';


const Auth = () => {
  return (
    <div className="bg-black z-0 relative min-h-screen">
      <div className="bg-cover max-sm:hidden opacity-50 bg-center bg-no-repeat inset-0 h-full min-h-screen overflow-hidden absolute w-full -z-10">
        <img alt="bg_img" src={assets.bgImgUrl} className="min-h-full min-w-full"></img>
      </div>
      <Header />
      <div className="max-w-md px-6 my-0 mx-auto">
        <GenericForm />
      </div>
    </div>
  )
}

export default Auth