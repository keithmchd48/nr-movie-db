import {useState, useRef} from 'react';
import {validateLoginForm, validateSignupForm} from '../utils/validations';

const LOGIN = 'login';
const SIGNUP = 'signup';

const GenericForm = () => {
  const [formType, setFormType] = useState(LOGIN);
  const [errorMessage, setErrorMessage] = useState(null);

  const formTitle = formType === LOGIN ? 'Sign In' : 'Sign Up';
  const toggleForm = () => {
    setErrorMessage(null);
    
    setFormType(formType === LOGIN ? SIGNUP : LOGIN);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const handleOnClick = () => {
    if (formType === LOGIN) {
      setErrorMessage(validateLoginForm(email.current.value, password.current.value));
    } else {
      setErrorMessage(validateSignupForm(name.current.value, email.current.value, password.current.value, confirmPassword.current.value));
    }

    if (errorMessage) {
      return;
    } else {}
  };

  return (
    <div className="max-w-md my-0 mx-auto py-12 sm:px-16 bg-opacity-80 bg-black rounded">
      <h1 className="text-white text-4xl mb-7 font-bold">{formTitle}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
      {
        formType === SIGNUP && (
        <input ref={name} type="text" placeholder="Full name" className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
      )}
        <input ref={email} type="text" placeholder="Email" className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
        <input ref={password} type="password" placeholder="Password" className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        {
          formType === SIGNUP && (
            <input ref={confirmPassword} type="password" placeholder="Confirm password" className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        )}
        {/* Submit button */}
        <button type="submit" onClick={handleOnClick} className="w-full bg-red-600 text-white p-3 opacity-100 rounded hover:bg-[rgb(193,17,25)]">
          {formTitle}
        </button>
        {errorMessage && <p className="text-red-500 font-thin text-sm my-2">{errorMessage}</p>}
      </form>

      {/* form footer */}
      {formType === LOGIN ? (
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

export default GenericForm