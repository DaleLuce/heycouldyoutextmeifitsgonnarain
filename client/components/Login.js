import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../store";
import Clouds from "./Clouds";

export const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate({ phoneNumber, password }, "login"));
  };

  return (
    <section>
      <Clouds />
      <div id="mainContainer">
        <div className="mainContent">
          <div id="mainText">
            <div>
              <form
                id="loginForm"
                onSubmit={handleSubmit}
                className={"login-form"}
              >
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    size="50"
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">
                    <small>Password</small>
                  </label>
                  <input
                    size="50"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                  />
                </div>
                <div>
                  <button type="submit">Login</button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
