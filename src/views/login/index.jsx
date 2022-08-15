import React from "react";

const Login = () => {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Login</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_password" className="text-black">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_password"
                      name="c_password"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <a href="#">Forget Password?</a>
                </div>

                <div className="form-group row">
                  <div className="col-md-4">
                    <button class="btn btn-black btn-lg py-3 btn-block">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- </form> --> */}
        </div>
      </div>
    </>
  );
};

export default Login;
