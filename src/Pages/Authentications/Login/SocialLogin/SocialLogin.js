import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import useToken from "../../../../Hooks/useToken";
import Loading from "../../../Shared/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate("/appointment");
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }
  return (
    <div>
      <div className="divider w-[90%] mx-auto my-0">OR</div>
      <div className="grid  h-20 card rounded-box mt-0 place-items-center">
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={async () => {
            await signInWithGoogle();
          }}
          className="btn font-normal hover:text-slate-100 text-accent uppercase bg-transparent w-full ]"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
