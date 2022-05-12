import React from "react";

const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full min-w-sm lg:min-w-[385px] shadow-2xl ">
            <div class="flex flex-col w-full border-opacity-50">
              <div class="grid card  rounded-box place-items-center">
                <div className="card-body  min-w-[327px] ">
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
                  <div className="form-control mt-6">
                    <button className="btn btn-accent text-[#D4D9E3]">
                      Login
                    </button>
                  </div>
                  <p className="mt-2">
                    New to Doctors Portal?{" "}
                    <span className="text-secondary">Create New Account?</span>
                  </p>
                </div>
              </div>
              <div class="divider w-[90%] mx-auto my-0">OR</div>
              <div class="grid  h-20 card rounded-box mt-0 place-items-center">
                <button className="btn font-normal hover:text-slate-100 text-accent uppercase bg-transparent min-w-[327px] ]">
                  Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
