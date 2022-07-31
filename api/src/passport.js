const { users } = require('./db')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/users/google/callback"
  },
  function async(accessToken, refreshToken, profile, done) {
    // try {
    //   let existingUser = await users.findOne({
    //     where:{
    //       id:profile.id
    //     }
    //   })

    //   if(existingUser){
    //     return done(null, existingUser)
    //   }

    //   const newUser = await users.create({
    //     id:profile.id,
    //     name:profile.displayName,
    //     email:profile.emails[0].value
    //   })
    //   return done(null, newUser)

    // } catch (error) {
    //   return done(error, false)
    // }
    
    done(null, profile)
  }
));

passport.serializeUser((user, done) =>{
    done(null,user)
})

passport.deserializeUser((user, done) =>{
    done(null,user)
})