const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth")
const app = express()

app.use(cookieSession(
    {
        name: "session",
        keys: ["ceedy"],
        maxAge: 24 * 60 * 60 * 100
    }
));

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credential: true,
}))

app.use("/auth", authRoute);
//ถ้าถูกเรียก /auth มันจะไป auth.js ที่เราเขียนไว้

app.listen("5000", () => {
    console.log("Server is running!")
})