const passport = require("passport");

module.exports = (app) => {
  app.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));

  app.get("/auth/facebook/callback", passport.authenticate("facebook"));
};
