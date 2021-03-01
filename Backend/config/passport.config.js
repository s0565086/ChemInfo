const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../model/user.db');

function initialize(passport) {
    const authenticateUser = async (username, password, done) => {
        let user;
        try{
            user = await userModel.getUserByUsername(username)
        }catch (e) {
            return done(null, false, e)
        }
        if(user === undefined) {
            return done(null, false, { message: 'Nutzer nicht gefunden! Bitte versuche es erneut oder melde dich an!'})
        }
        try{
            if(password === user.user_password){
                return done(null, user)
            }else {
                return done(null, false, { message: 'Passwort ist falsch! Bitte nochmal probieren!'})
            }
        }catch (e) {
            return done(e)
        }
    }
    passport.use(new LocalStrategy( { username: 'username'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.user_username))
    passport.deserializeUser(async (username, done) => {
        return done(null, await userModel.getUserByUsername(username))
    })
}

module.exports = initialize