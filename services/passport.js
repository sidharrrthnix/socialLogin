const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.fbID,
      clientSecret: keys.fbSecret,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "name", "gender", "picture.type(large)", "email"],
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken);
      console.log(profile);
    }
  )
);
