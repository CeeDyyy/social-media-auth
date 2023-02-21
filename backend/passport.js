const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "730444868518-t8e9ginfpoc0e39dp0tt984ugv8c6qll.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "0ce2aee50a3d6b491ef2"
const GITHUB_CLIENT_SECRET = "53a33b9cdc6e4adbcea29635f32dfa7e1b660f63"

const FACEBOOK_APP_ID = "0ce2aee50a3d6b491ef2"
const FACEBOOK_APP_SECRET = "53a33b9cdc6e4adbcea29635f32dfa7e1b660f63"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});