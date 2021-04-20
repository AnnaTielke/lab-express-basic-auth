/*const router = require("express").Router();

const authorize = (req, res, next) => {
  console.log("See I'm here");
  if (req.session.userInfo) {
    next();
  } else {
    res.redirect("/signin");
  }
};

router.get("/main", authorize, (req, res, next) => {
  console.log("Hey, in main");
  const { username } = req.session.userInfo;
  res.render("/main.hbs", { username });
});

router.get("/private", authorize, (req, res, next) => {
  console.log("Hey, in profile");
  const { username } = req.session.userInfo;
  res.render("/private.hbs", { username });
});

module.exports = router;
*/
