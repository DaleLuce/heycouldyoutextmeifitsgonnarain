import axios from "axios";
import history from "../history";

const TOKEN = "token";

const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";

const setUser = (user) => ({ type: SET_USER, user });
const editUser = (user) => ({ type: UPDATE_USER, user });

export const updateUser = (phoneNumber, userInfo) => {
  return async (dispatch) => {
    userInfo.phoneNumber = phoneNumber;
    // console.log("will this work?================", userInfo.phoneNumber);
    // console.log("will this work?================", userInfo);

    const token = window.localStorage.getItem(TOKEN);
    // console.log(token);
    if (token) {
      const { data } = await axios.put(`/api/users/${phoneNumber}`, userInfo, {
        headers: { authorization: token },
      });
      dispatch(editUser(data));
    } else {
      console.log("else from updateUser");
    }
  };
};

export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const { data } = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setUser(data));
  }
};

export const authenticate = (userInfo, method) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/${method}`, userInfo);
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
    history.push("/countmein");
  } catch (authError) {}
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/");
  return {
    type: SET_USER,
    user: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
