import { MouseEventHandler, MouseEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PATHS } from "utils/assets";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

const GenericForm = () => {
  console.log('GenericForm render');
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loginWithRedirect } = useAuth0();

  const handleOnClick: MouseEventHandler = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
      loginWithRedirect()
        .then(() => {
          navigate({ to: PATHS.BROWSE });
        })
        .catch((error) => {
          console.error(error);
      });
  };

  return (
    <div className="max-w-md my-0 mx-auto py-12 sm:px-16 bg-brand-black/80 rounded">
      <h1 className="text-white text-4xl mb-7 font-bold">{t("signIn")}</h1>
      <div onSubmit={(e) => e.preventDefault()}>
        {/* Submit button */}
        <button
          onClick={handleOnClick}
          className="w-full bg-brand-orange text-white p-3 opacity-100 rounded cursor-pointer hover:bg-brand-orange-hover"
        >
          {t("signIn")}
        </button>
      </div>
    </div>
  );
};

export default GenericForm;
