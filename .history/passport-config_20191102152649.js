const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport) {
    const authicateUser = (user, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, {message:'No user with that email'})
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email'}),
    authicateUser)
    passport.serializeUser((user, done) => {    })
    passport.deserializeUser((id, done) => {    })

}