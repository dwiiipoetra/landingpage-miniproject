import React from "react";

const Register = () => {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Register</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_username" className="text-black">
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_username"
                      name="c_username"
                    />
                  </div>
                </div>

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
                  <label
                    for="c_terms_conditions"
                    className="text-black"
                    data-bs-toggle="collapse"
                    href="#terms_conditions"
                    role="button"
                    aria-expanded="false"
                    aria-controls="terms_conditions"
                  >
                    <input type="checkbox" value="1" id="c_terms_conditions" />{" "}
                    By checking this, you agree to our terms and conditions
                  </label>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    {/* <div class="form-group"> */}
                    <button class="btn btn-black btn-lg py-3 btn-block">
                      Register
                    </button>
                    {/* </div> */}
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

export default Register;
