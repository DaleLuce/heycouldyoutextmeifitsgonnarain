import React from "react";
import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/user";
import Clouds from "./clouds";

export const CountMeIn = (props) => {
  const user = useSelector((state) => {
    return state.user;
  });
  const [formState, setFormState] = useState({
    alertTime: "",
    longitude: "",
    latitude: "",
    active: true,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleLocSubmit = (e) => {
    e.preventDefault();
    getCoordinates();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("is this", user.phoneNumber, formState);
    dispatch(updateUser(user.phoneNumber, formState));
  };

  function getCoordinates() {
    var startPos;
    var geoSuccess = function (position) {
      startPos = position;
      setFormState({
        ...formState,
        latitude: startPos.coords.latitude,
        longitude: startPos.coords.longitude,
      });
    };
    var geoError = function (error) {
      console.error("Error occurred.");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }

  return (
    <section>
      <Clouds />
      <div id="mainContainer">
        <div className="mainContent"></div>
        <div id="location">
          <h2>Where you at?</h2>
          <form onSubmit={handleLocSubmit}>
            <label htmlFor="longitude">Longitude</label>
            <input
              size="50"
              type="text"
              id="longitude"
              name="longitude"
              value={formState.longitude}
              onChange={handleChange}
            ></input>

            <label htmlFor="latitude">Latitude</label>
            <input
              size="50"
              type="text"
              id="latitude"
              name="latitude"
              value={formState.latitude}
              onChange={handleChange}
            ></input>

            <button value="submit" type="submit">
              Fetch Coordinates
            </button>
          </form>
        </div>
        <div>
          <h2>What time are you usually deciding what to wear?</h2>
          <form onSubmit={handleSubmit}>
            <div id="timePickerDiv">
              <label htmlFor="timePicker"></label>
              <input
                type="time"
                id="alertTime"
                name="alertTime"
                onChange={handleChange}
                value={formState.alertTime}
              ></input>
              <button value="submit" type="submit">
                Submit When &#38; Where
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    phoneNumber: state.auth.phoneNumber,
  };
};

export default connect(mapState)(CountMeIn);
