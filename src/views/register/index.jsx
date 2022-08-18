import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../config/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error]);

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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_password" className="text-black">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="c_password"
                      name="c_password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="form-group">
                  <p>
                    Already have an account? <Link to="/login">Login</Link> now.
                  </p>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    {/* <div class="form-group"> */}
                    <button
                      className="btn btn-black btn-lg py-3 btn-block mt-5"
                      onClick={register}
                    >
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
