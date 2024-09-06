import { useState, useRef } from "react";
import { validateLoginForm, validateSignupForm } from "utils/validations";
import auth from "utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { ADD_USER, LOGOUT_USER } from "store/slices/userSlice";
import { AVATAR, PATHS } from "utils/assets";
import useTranslations from "hooks/useTranslations";
import { type TLanguage } from "utils/translations/types";

const INVALID_CREDENTIALS: string = "auth/invalid-credential";

enum FormType {
  LOGIN = "login",
  SIGNUP = "signup",
};

const GenericForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<string>(FormType.LOGIN);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const TRANSLATIONS: TLanguage = useTranslations();
  const TRANSLATIONS_AUTH: TLanguage["auth"] = TRANSLATIONS.auth;
  const TRANSLATIONS_VALIDATIONS: TLanguage["validations"] = TRANSLATIONS.validations;

  const formTitle: string =
    formType === FormType.LOGIN ? TRANSLATIONS_AUTH.signIn : TRANSLATIONS_AUTH.signUp;
  const toggleForm = () => {
    setFormType(formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN);
    setErrorMessage(null);
  };

  const name: React.RefObject<any> = useRef(null);
  const email: React.RefObject<any> = useRef(null);
  const password: React.RefObject<any> = useRef(null);
  const confirmPassword: React.RefObject<any> = useRef(null);

  const handleOnClick: React.MouseEventHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (formType === FormType.LOGIN) {
      let message: string | null = validateLoginForm(email.current.value);
      setErrorMessage(null);
      if (message) {
        // @ts-ignore
        setErrorMessage(() => TRANSLATIONS_VALIDATIONS[message]);
        return;
      }

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          setErrorMessage(null);
          navigate(PATHS.BROWSE);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === INVALID_CREDENTIALS) {
            let message: string = TRANSLATIONS_VALIDATIONS["invalidCredentials"];
            setErrorMessage(message);
          }
        });
    } else {
      const message: string | null = validateSignupForm(
        name.current.value,
        email.current.value,
        password.current.value,
        confirmPassword.current.value
      );
      setErrorMessage(null);
      if (message) {
        // @ts-ignore
        setErrorMessage(() => TRANSLATIONS_VALIDATIONS[message]);
        return;
      }

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          setErrorMessage(null);

          if (!auth.currentUser) {
            dispatch(LOGOUT_USER());
            return;
          }
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              const uid: string = auth?.currentUser?.uid || "";
              const email: string = auth?.currentUser?.email || "";
              const photoURL: string = auth?.currentUser?.photoURL || "";
              const displayName: string = auth?.currentUser?.displayName || "";
              // dispatching again on purpose because displayName is not updated onAuthChanged because it
              // triggers before updateProfile is called
              dispatch(ADD_USER({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              const message = error.message;
              console.log(message);
            });
        })
        .catch((error) => {
          const message = error.message;
          console.log(message);
        });
    }
  };

  return (
    <div className="max-w-md my-0 mx-auto py-12 sm:px-16 bg-opacity-80 bg-brand-black rounded">
      <h1 className="text-white text-4xl mb-7 font-bold">{formTitle}</h1>
      <div onSubmit={(e) => e.preventDefault()}>
        {formType === FormType.SIGNUP && (
          <input
            ref={name}
            type="text"
            placeholder={TRANSLATIONS_AUTH.fullNamePlaceholder}
            className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={TRANSLATIONS_AUTH.emailPlaceholder}
          className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder={TRANSLATIONS_AUTH.passwordPlaceholder}
          className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded"
        />
        {formType === FormType.SIGNUP && (
          <input
            ref={confirmPassword}
            type="password"
            placeholder={TRANSLATIONS_AUTH.confirmPasswordPlaceholder}
            className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded"
          />
        )}
        {/* Submit button */}
        <button
          onClick={handleOnClick}
          className="w-full bg-brand-orange text-white p-3 opacity-100 rounded hover:bg-[#e55303]"
        >
          {formTitle}
        </button>
        {errorMessage && (
          <p className="text-red-500 font-thin text-sm my-2">{errorMessage}</p>
        )}
      </div>

      {/* form footer */}
      {formType === FormType.LOGIN ? (
        <p className="text-gray-300 mt-40 font-normal">
          {TRANSLATIONS_AUTH.newToApp}{" "}
          <button
            onClick={toggleForm}
            className="text-white hover:underline font-medium ml-2"
          >
            {TRANSLATIONS_AUTH.signUpNow}
          </button>
        </p>
      ) : (
        <p className="text-gray-300 mt-40 font-normal">
          {TRANSLATIONS_AUTH.alreadyMember}{" "}
          <button
            onClick={toggleForm}
            className="text-white hover:underline font-medium ml-2"
          >
            {TRANSLATIONS_AUTH.signInNow}
          </button>
        </p>
      )}
    </div>
  );
};

export default GenericForm;
