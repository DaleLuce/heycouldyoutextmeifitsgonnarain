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
        <div className="mainContentHalf">
          <h4 className="left">What...like...everytime it's gonna rain?</h4>
          <h4 className="right">
            Yeah. And also like...when i'm getting ready for work in the
            morning?
          </h4>
          <h4 className="left">
            Can't you just check on a weather app or something?
          </h4>
          <h4 className="right">
            Yea but..Im always running late in the mornings...
          </h4>
        </div>

        <div className="mainContentHalf">
          <h4 id="left">This seems a little ridiculous, but I guess so....</h4>
          <h4>
            Wait....whats your name again? Do I even have your phone number?
          </h4>

          <form>
            <label htmlFor="name">Name:</label>
            <input size="50" type="text" id="name" name="name"></input>
            <label htmlFor="number">Phone Number</label>
            <input size="50" type="text" id="number" name="number"></input>
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
