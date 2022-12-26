const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../DB/db-models");
const Users = models.users;
const validPassword = require("../lib/passwordUtils").validPassword;

const customFields = {
  usernameField: "email",
};

const verifyCallback = async (username, password, done) => {
  const user = await Users.findOne({ email: username });
  if (!user) return done(null, false);

  const isValid = await validPassword(password, user.hash);

  if (isValid) {
    return done(null, user);
  } else {
    return done(null, false);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  Users.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});
