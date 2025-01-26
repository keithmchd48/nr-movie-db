import { useState, useRef, RefObject, MouseEventHandler, MouseEvent } from "react";
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
import { type TLanguage, type TErrorMessage } from "utils/translations/types";

const INVALID_CREDENTIALS: string = "auth/invalid-credential";
const DUMMY_USER_EMAIL: string = "john.doe@gmail.com";
const DUMMY_USER_PASSWORD: string = "generic12345&";

enum EnumForm {
  LOGIN = "login",
  SIGNUP = "signup",
};

const GenericForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<string>(EnumForm.LOGIN);
  const [errorMessage, setErrorMessage] = useState<TErrorMessage>("");

  const TRANSLATIONS: TLanguage = useTranslations();
  const TRANSLATIONS_AUTH: TLanguage["auth"] = TRANSLATIONS.auth;
  const TRANSLATIONS_VALIDATIONS: TLanguage["validations"] = TRANSLATIONS.validations;

  const formTitle: string =
    formType === EnumForm.LOGIN ? TRANSLATIONS_AUTH.signIn : TRANSLATIONS_AUTH.signUp;
  const toggleForm: () => void = () => {
    setFormType(formType === EnumForm.LOGIN ? EnumForm.SIGNUP : EnumForm.LOGIN);
    setErrorMessage(() => "");
  };

  const name: RefObject<HTMLInputElement> = useRef(null);
  const email: RefObject<HTMLInputElement> = useRef(null);
  const password: RefObject<HTMLInputElement> = useRef(null);
  const confirmPassword: RefObject<HTMLInputElement> = useRef(null);

  const handleOnClick: MouseEventHandler = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (formType === EnumForm.LOGIN) {
      const emailValue = email?.current?.value;
      const passwordValue = password?.current?.value;
      let message: TErrorMessage = validateLoginForm(emailValue || "", passwordValue || "");
      setErrorMessage(() => "");
      if (message !== "") {
        setErrorMessage(() => TRANSLATIONS_VALIDATIONS[message] as TErrorMessage);
        return;
      }

      signInWithEmailAndPassword(
        auth,
        emailValue || "",
        passwordValue || ""
      )
        .then(() => {
          setErrorMessage(() => "");
          navigate(PATHS.BROWSE);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === INVALID_CREDENTIALS) {
            setErrorMessage(() => TRANSLATIONS_VALIDATIONS["invalidCredentials"] as TErrorMessage);
          }
        });
    } else {
      const nameValue = name?.current?.value;
      const emailValue = email?.current?.value;
      const passwordValue = password?.current?.value;
      const confirmPasswordValue = confirmPassword?.current?.value;
      const message: TErrorMessage = validateSignupForm(
        nameValue || "",
        emailValue || "",
        passwordValue || "",
        confirmPasswordValue || ""
      );
      setErrorMessage(() => "");
      if (message) {
        setErrorMessage(() => TRANSLATIONS_VALIDATIONS[message] as TErrorMessage);
        return;
      }

      createUserWithEmailAndPassword(
        auth,
        emailValue || "",
        passwordValue || ""
      )
        .then(() => {
          setErrorMessage(() => "");

          if (!auth.currentUser) {
            dispatch(LOGOUT_USER());
            return;
          }
          updateProfile(auth.currentUser, {
            displayName: nameValue || "",
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
        {formType === EnumForm.SIGNUP && (
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
          value={DUMMY_USER_EMAIL}
          placeholder={TRANSLATIONS_AUTH.emailPlaceholder}
          className="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded"
        />
        <input
          ref={password}
          type="password"
          value={DUMMY_USER_PASSWORD}
          placeholder={TRANSLATIONS_AUTH.passwordPlaceholder}
          className="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded"
        />
        {formType === EnumForm.SIGNUP && (
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
      {formType === EnumForm.LOGIN ? (
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
