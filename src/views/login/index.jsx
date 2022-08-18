import React, { useState, useEffect } from "react";
import { auth, loginWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  //state for the form
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const handleLogin = async () => {
    await loginWithEmailAndPassword(dataLogin.email, dataLogin.password);
  };

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
                      onChange={(element) =>
                        setDataLogin({
                          ...dataLogin,
                          email: element.target.value,
                        })
                      }
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
                      onChange={(element) =>
                        setDataLogin({
                          ...dataLogin,
                          password: element.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  {/* <a href="#">Forget Password?</a> */}
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>

                <div className="form-group row">
                  <div className="col-md-4">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block mt-5"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
