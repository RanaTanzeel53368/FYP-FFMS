import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import Buttons from "../components/Buttons";
import Loader from "../components/Loader";
import { AppContext } from "../context";

const Login = () => {
  const { login } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userss, setUserss] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = () => {
    setEmailError("");
    setPasswordError("");

    if (!userss.email.trim()) {
      setEmailError("Email field is required");
      return;
    } else if (!userss.password.trim()) {
      setPasswordError("Password field is required");
      return;
    } else {
      let data = {
        name: "Owais Chohan",
        password: null,
        emaail: "owaischohan@gmail.com",
      };
      localStorage.setItem("users", JSON.stringify(data));
      login(data);
    }
  };

  const handleOnChange = (e) => {
    setUserss({
      ...userss,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="login ">
        <div className="container-fluid">
          <div className="row min-vh-100 ">
            <div className="col-md-7 login-bg  d-flex justify-content-center align-items-center  ">
              <div className="logo logo-section d-flex justify-content-center align-items-center mx-auto">
                <img src={logo} alt="logo" className="w-25 text-start" draggable="false" />
                <Typography className="mt-1 fw-bold w-75 text-white text-center" variant="body2">
                Maintaining a successful fish tank requires careful consideration of various components to create a thriving aquatic environment. The foundation of any tank is the aquarium itself, often made with transparent sides to allow for clear observation of the aquatic life within. 
                  </Typography>
              </div>
            </div>
            <div className="col-md-5  d-flex justify-content-center align-items-center ">
              <div className="login-form">
                <div className="heading mb-4 text-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-50"
                    draggable="false"
                  />
                  <Typography className="mt-1 fw-bold" variant="body2">
                    FISH TANK
                  </Typography>
                  <Typography className="mt-1" variant="h6">
                    Welcome Back!
                  </Typography>
                </div>
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  className="email-input mt-2"
                  size="small"
                  name="email"
                  fullWidth
                  value={userss.email}
                  onChange={handleOnChange}
                  error={!!emailError}
                  helperText={emailError}
                />
                <div className="password-input">
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    className="password-input mt-3"
                    name="password"
                    onChange={handleOnChange}
                    size="small"
                    error={!!passwordError}
                    helperText={passwordError}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Link>
                  <p className="text-end mt-2" style={{ fontSize: "13px" }}>
                    Forgot Password
                  </p>
                </Link>
                <div className="d-flex gap-2 justify-content-center">
                  <Buttons
                    name="Login"
                    className="login-button"
                    onClick={loginUser}
                  />

                  {/* <Link to="/signup">
                    <Buttons name="SignUp" className="signin-button" />
                  </Link> */}
                </div>
              </div>
            </div>

            {/* mobile version login form */}
          </div>
        </div>
        {isLoading && <Loader isLoading={isLoading} />}
      </div>

    </>
  );
};

export default Login;
