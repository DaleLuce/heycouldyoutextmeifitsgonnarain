const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("tokenfrom requiretoken", token);
    const user = await User.findByToken(token);
    req.phoneNumber = user.phoneNumber;
    next();
  } catch (error) {
    next(error);
  }
};

router.put("/:id", requireToken, async (req, res, next) => {
  try {
    console.log("req.body------------", req.body);
    const { phoneNumber, longitude, latitude, alertTime } = req.body;
    const user = await User.findByPk(phoneNumber);
    await user.update({
      longitude,
      latitude,
      alertTime,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});
