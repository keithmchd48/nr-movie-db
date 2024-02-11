import React from 'react'
import Header from './Header'
import assets from '../utils/assets'

const Login = () => {
  const bgImgStyle = {
    backgroundImage: `url(${assets.bgImgUrl})`
  };

  return (
    <div className="login-wrapper bg-cover bg-center bg-no-repeat inset-0 h-full min-h-screen overflow-hidden absolute w-full z-0"
      style={bgImgStyle}>
      <Header />
      <div className="max-w-md my-0 mx-auto py-12 px-16 opacity-70 bg-black">
        <form className="text-white">
          <h1>Sign In</h1>
        </form>
      </div>
    </div>
  )
}

export default Login