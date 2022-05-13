import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./Login/SocialLogin/SocialLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [updateProfile, updating, uperror] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading || updating) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (error || uperror) {
    errorMessage = <p>{error?.message || uperror?.message}</p>;
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card my-0 py-0 flex-shrink-0 w-full min-w-sm lg:min-w-[385px] shadow-2xl ">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid card  rounded-box place-items-center">
                <div className="card-body p-3 px-4 min-w-[327px] ">
                  <h2 className="text-center text-xl font-sans my-0">Signup</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                        type="text"
                        placeholder="email"
                        className="input input-bordered "
                      />
                      <label className="label">
                        {errors.name?.type === "required" && (
                          <span className="text-red-500 label-text-alt">
                            {errors.name.message}
                          </span>
                        )}
                      </label>
                    </div>
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
                        type="email"
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
                        value="Sign up"
                      />
                    </div>
                  </form>
                  <p className="mt-2">
                    Already Have an Account?{" "}
                    <Link to="/login" className="text-secondary">
                      Login Now
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

export default Signup;
