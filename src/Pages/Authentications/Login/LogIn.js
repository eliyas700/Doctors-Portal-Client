import React from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
const LogIn = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, userError] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // if (user) {
  //
  // }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await navigate(from, { replace: true });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (userError || error) {
    errorMessage = <p>{userError.message}</p>;
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card my-0 py-0 flex-shrink-0 w-full min-w-sm lg:min-w-[385px] shadow-2xl ">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid card  rounded-box place-items-center">
                <div className="card-body p-3 px-4 min-w-[327px] ">
                  <h2 className="text-center text-xl font-sans my-0">Login</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },

                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "You Must Provide a Valid Email",
                          },
                        })}
                        type="text"
                        placeholder="email"
                        className="input input-bordered "
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="text-red-500 label-text-alt">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="text-red-500 label-text-alt">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* Password Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },

                          minLength: {
                            value: 6,
                            message: "Must have 6 Characters or More",
                          },
                        })}
                        type="password"
                        placeholder="Password"
                        className="input input-bordered "
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="text-red-500 label-text-alt">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="text-red-500 label-text-alt">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                      <small className="text-red-500">{errorMessage}</small>
                      <label className="label">
                        <a href="/" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-2">
                      <input
                        className="btn btn-accent mt-0  uppercase text-[#D4D9E3]"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                  <p className="mt-2">
                    New to Doctors Portal?{" "}
                    <Link to="/signup" className="text-secondary">
                      Create New Account
                    </Link>
                  </p>
                </div>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
