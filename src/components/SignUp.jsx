import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import Buttons from "../components/Buttons";
import TextFeilds from "../components/TextFeilds";
import { IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { loginAdmin } from "../services/products/Products";
import { AppContext } from "../context";
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const { login } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [userss, setUserss] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = () => {
    setEmailError('');
    setPasswordError('');

    if (!userss.email.trim()) {
      setEmailError("Email field is required");
      return;
    }
    
    if (!userss.password.trim()) {
      setPasswordError("Password field is required");
      return;
    }

    setIsLoading(true);

    loginAdmin(userss)
      .then((res) => {
        if (res.status === 200) {
          let data = res?.data?.data;
          localStorage.setItem("users", JSON.stringify(data));
          login(data);
          toast.success("hello")
        }
      })
      .catch((error) => {
        toast.error(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOnChange = (e) => {
    setUserss({
      ...userss,
      [e.target.name]: e.target.value
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
      <div className="login d-md-block d-none">
        <div className="container-fluid">
          <div className="row min-vh-100 ">
            
            <div className="col-md-7 login-bg  d-flex justify-content-center align-items-center  ">
              <div className="logo d-flex justify-content-center align-items-center mx-auto">
              <img src={logo} alt="logo" className="w-75" draggable="false" />
              
              </div>
            </div>
            <div className="col-md-5  d-flex justify-content-center align-items-center ">
              <div className="login-form d-none">
                <div className="heading mb-4 text-center">
                <img src={logo} alt="logo" className="w-50" draggable="false" />
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
                <Link to="/">
                  <Buttons
                    name="Login"
                    className="login-button"
                    onClick={loginUser}
                  />
                  </Link>
                  <Buttons
                    name="SignUp"
                    className="signin-button"
                  />

                 
                </div>
              </div>
              <div className="create-account">
              <div className="heading text-center mb-3">
              <img src={logo} alt="logo" className="w-25" draggable="false" />  
              </div>
                <Typography variant="h5" className="text-center fw-bold mb-4">
                    CREATE AN ACCOUNT
                </Typography>
                 <div className="signin_form">
                    <div className="container">
                       <div className="row d-flex justify-content-center">
                          <div className="col-md-6">
                            <TextFeilds
                                label="First Name"
                                type="text"
                                id="name"
                                className="email-input mt-2"
                                size="medium"
                                name="name"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                          </div>
                          <div className="col-md-6">
                          <TextFeilds
                                label="Last Name"
                                type="text"
                                id="lname"
                                className="email-input mt-2"
                                size="medium"
                                name="lname"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                          </div>
                          
                       </div>
                       <div className="row d-flex justify-content-center">
                           <div className="col-md-6">
                           <TextFeilds
                                label="Phone"
                                type="text"
                                id="phone"
                                className="email-input mt-2"
                                // size="medium"
                                name="phone"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                           </div>
                           <div className="col-md-6">
                           <TextFeilds
                                label="Email"
                                type="text"
                                id="email"
                                className="email-input mt-2"
                                // size="medium"
                                name="email"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                           </div>
                       </div>
                       <div className="row d-flex justify-content-center">
                           <div className="col-md-6">
                           <TextFeilds
                                label="Password"
                                type="text"
                                id="password"
                                className="email-input mt-2"
                                // size="medium"
                                name="password"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                           </div>
                           <div className="col-md-6">
                           <TextFeilds
                                label="Confirm Passowrd"
                                type="text"
                                id="cpassword"
                                className="email-input mt-2"
                                // size="medium"
                                name="cpa"
                                fullWidth
                                // value={userss.email}
                                // onChange={handleOnChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                           </div>
                       </div>
                       <div className="d-flex gap-2 mt-4 justify-content-center">
                <Link to="/">
                  <Buttons
                    name="Login"
                    className="login-button"
                    onClick={loginUser}
                  />
                  </Link>
                  <Buttons
                    name="SignUp"
                    className="signin-button"
                  />

                 
                </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* mobile version login form */}
            
          </div>
        
        </div>
          {isLoading && (
             <Loader isLoading={isLoading} />
          )}
      </div>

    
    </>
  );
};

export default SignUp;
