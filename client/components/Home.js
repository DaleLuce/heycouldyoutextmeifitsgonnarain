import React from "react";
import { connect } from "react-redux";
import Clouds from "./Clouds";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <section>
      <Clouds />
      <div id="mainContainer">
        <div className="mainContent">
          <div id="mainText">
            <h4 id="1" className="left">
              What...like...everytime it's gonna rain?
            </h4>
            <h4 className="right">
              Yeah. And also like...when i'm getting ready for work in the
              morning?
            </h4>
            <h4 className="left">
              Can't you just check on a weather app or something?
            </h4>
            <h4 className="right">Yea but...sometimes I forget.</h4>
            <h4 id="left">
              This seems a little ridiculous, but I guess so....
            </h4>
          </div>
          <form>
            <label htmlFor="name">Name</label>
            <input size="50" type="text" id="name" name="name"></input>
            <label htmlFor="number">Phone Number</label>
            <input size="50" type="text" id="number" name="number"></input>
            <br></br>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
