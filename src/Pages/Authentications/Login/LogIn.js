import React from "react";
import SocialLogin from "./SocialLogin/SocialLogin";

const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card my-0 py-0 flex-shrink-0 w-full min-w-sm lg:min-w-[385px] shadow-2xl ">
            <div class="flex flex-col w-full border-opacity-50">
              <div class="grid card  rounded-box place-items-center">
                <div className="card-body p-3 px-4 min-w-[327px] ">
                  <h2 className="text-center text-xl font-sans my-0">Login</h2>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered "
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="/" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-2">
                    <button className="btn btn-accent mt-0 text-[#D4D9E3]">
                      Login
                    </button>
                  </div>
                  <p className="mt-2">
                    New to Doctors Portal?{" "}
                    <span className="text-secondary">Create New Account</span>
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
