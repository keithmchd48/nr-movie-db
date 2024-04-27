import Header from "components/Header";
import { BG_IMG_URL } from "utils/assets";

import GenericForm from "components/GenericForm";

const Auth = () => {
  return (
    <div className="bg-brand-black z-0 relative min-h-screen">
      <div className="bg-cover max-sm:hidden opacity-50 bg-center bg-no-repeat inset-0 h-full min-h-screen overflow-hidden absolute w-full -z-10">
        <img
          alt="bg_img"
          src={BG_IMG_URL}
          className="min-h-full min-w-full"
        ></img>
      </div>
      <Header />
      <div className="flex items-center h-screen">
        <div className="max-w-md px-6 my-0 mx-auto">
          <GenericForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
