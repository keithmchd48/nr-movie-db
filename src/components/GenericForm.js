import React from 'react'
import {useState} from 'react';

const LoginForm = () => {
  const [formType, setFormType] = useState('login');

  const formTitle = formType === 'login' ? 'Sign In' : 'Sign Up';
  const toggleForm = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="max-w-md my-0 mx-auto py-12 sm:px-16 bg-opacity-80 bg-black rounded">
      <h1 className="text-white text-4xl mb-7 font-bold">{formTitle}</h1>
      <form className="">
      {
        formType === 'signup' && (
        <input type="text" placeholder="Full name" className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
      )}
        <input type="text" placeholder="Email or phone number" className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
        <input type="password" placeholder="Password" className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        {
          formType === 'signup' && (
            <input type="password" placeholder="Confirm password" className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        )}
        <button type="submit" className="w-full bg-red-600 text-white p-3 opacity-100 rounded hover:bg-[rgb(193,17,25)]">
          {formTitle}
        </button>
      </form>
      {formType === 'login' ? (
        <p className="text-gray-300 mt-40 font-normal">New to Netflix?
        <button onClick={toggleForm} className="text-white hover:underline font-medium ml-2">Sign up now.</button>
      </p>
      ) : (
        <p className="text-gray-300 mt-40 font-normal">Already have an account?
        <button onClick={toggleForm} className="text-white hover:underline font-medium ml-2">Sign In.</button>
      </p>
      )}
      
    </div>
  )
}

export default LoginForm