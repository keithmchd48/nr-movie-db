import {useState, useRef} from 'react';
import {validateLoginForm, validateSignupForm} from '../utils/validations';
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../utils/slices/userSlice';
import {AVATAR, PATHS} from '../utils/assets';
import {LANG} from '../utils/languages';
import {useSelector} from 'react-redux';

const LOGIN = 'login';
const SIGNUP = 'signup';

const GenericForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState(LOGIN);
  const [errorMessage, setErrorMessage] = useState(null);
  const preferredLang = useSelector(store => store.config.preferredLang);
  const TRANSLATIONS = LANG[preferredLang].auth;

  const formTitle = formType === LOGIN ? TRANSLATIONS.signIn : TRANSLATIONS.signUp;
  const toggleForm = () => {
    setFormType(formType === LOGIN ? SIGNUP : LOGIN);
    setErrorMessage(null);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleOnClick = (e) => {
    e.preventDefault();
    if (formType === LOGIN) {
      let message = validateLoginForm(email.current.value);
      setErrorMessage(message);
      if (message) {
        return;
      }

      signInWithEmailAndPassword(auth, email.current.value, password.current.value).then(() => {
        setErrorMessage(null);
        navigate(PATHS.BROWSE);
      }).catch((error) => {
        const message = error.message;
        console.log(message);
      });
    } else {
      const message = validateSignupForm(name.current.value, email.current.value, password.current.value, confirmPassword.current.value);
      setErrorMessage(message);
      if (message) {
        return;
      }

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then(() => {
        setErrorMessage(null);
        
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: AVATAR
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          // dispatching again on purpose because displayName is not updated onAuthChanged because it
          // triggers before updateProfile is called
          dispatch(ADD_USER({uid, email, displayName, photoURL}));
        }).catch((error) => {
          const message = error.message;
          console.log(message);
        });
      }).catch((error) => {
        const message = error.message;
        console.log(message);
      });
    }
  };

  return (
    <div className="max-w-md my-0 mx-auto py-12 sm:px-16 bg-opacity-80 bg-black rounded">
      <h1 className="text-white text-4xl mb-7 font-bold">{formTitle}</h1>
      <div onSubmit={(e) => e.preventDefault()}>
      {
        formType === SIGNUP && (
        <input ref={name} type="text" placeholder={TRANSLATIONS.fullNamePlaceholder} className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
      )}
        <input ref={email} type="text" placeholder={TRANSLATIONS.emailPlaceholder} className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded" />
        <input ref={password} type="password" placeholder={TRANSLATIONS.passwordPlaceholder} className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        {
          formType === SIGNUP && (
            <input ref={confirmPassword} type="password" placeholder={TRANSLATIONS.confirmPasswordPlaceholder} className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded" />
        )}
        {/* Submit button */}
        <button onClick={handleOnClick} className="w-full bg-red-600 text-white p-3 opacity-100 rounded hover:bg-[rgb(193,17,25)]">
          {formTitle}
        </button>
        {errorMessage && <p className="text-red-500 font-thin text-sm my-2">{errorMessage}</p>}
      </div>

      {/* form footer */}
      {formType === LOGIN ? (
        <p className="text-gray-300 mt-40 font-normal">
          {TRANSLATIONS.newToApp} <button onClick={toggleForm} className="text-white hover:underline font-medium ml-2">{TRANSLATIONS.signUpNow}</button>
        </p>
      ) : (
        <p className="text-gray-300 mt-40 font-normal">
          {TRANSLATIONS.alreadyMember} <button onClick={toggleForm} className="text-white hover:underline font-medium ml-2">{TRANSLATIONS.signInNow}</button>
        </p>
      )}
      
    </div>
  )
}

export default GenericForm