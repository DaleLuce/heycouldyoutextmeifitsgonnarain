import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../store";
import Clouds from "./Clouds";

const Home = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    phoneNumber: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(newUser, "signup"));
  };

  return (
    <section>
      <Clouds />
      <div id="mainContainer">
        <div className="mainContent">
          <div id="mainText">
            <h4 id="introOne" className="left">
              What...like...everytime it rains?
            </h4>
            <h4 id="introTwo" className="right">
              Yeah. And also maybe...when i'm getting ready for work in the
              morning?
            </h4>
            <h4 id="introThree" className="left">
              Can't you just check on a weather app or something?
            </h4>
            <h4 id="introFour" className="right">
              Yea but...sometimes I forget.
            </h4>
          </div>
        </div>
        <form onSubmit={handleSubmit} id="introForm">
          <label htmlFor="FirstName">First Name</label>
          <input
            size="50"
            type="text"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          ></input>

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            size="50"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            value={newUser.phoneNumber}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            size="50"
            type="text"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          ></input>
          <br></br>
          <button type="submit" value="submit">
            Count Me In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
