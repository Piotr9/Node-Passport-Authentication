const LocalStrategy = require('passport-local').Strategy

function initialize(passport) {
    const authicateUser = (user, password, done) => {
        const user = getUserByEmail(email)
    }
    passport.use(new LocalStrategy({ usernameField: 'email'}),
    authicateUser)
    passport.serializeUser((user, done) => {    })
    passport.deserializeUser((id, done) => {    })

}