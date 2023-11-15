const passport = require('passport')
const dotenv = require("dotenv");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const TwitterStrategy = require('@superfaceai/passport-twitter-oauth2')
const { User } = require('../models/userSchema')

const { envConfig } = require('../../../config/env-config');

const envVariation = envConfig.envVariation;

if (envVariation === "production") {
    dotenv.config({ path: "../../../production.env" });
} else if (envVariation === "development") {
    dotenv.config({ path: "../../../development.env" });
} else if (envVariation === "test") {
    dotenv.config({ path: "../../../test.env" });
}

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch((error) => {
            done(error);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.FRONTEND_BASE_URL}/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await User.findOne({ 'oauth.providerId': profile.id });

                if (user) {
                    return done(null, user);
                }

                const newUser = new User({
                    email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
                    oauth: {
                        provider: 'google',
                        providerId: profile.id,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    },
                    avartar: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
                });

                const savedUser = await newUser.save();
                return done(null, savedUser);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

passport.use(
    new TwitterStrategy(
        {
            consumerKey: process.env.TWITTER_CLIENT_ID,
            consumerSecret: process.env.TWITTER_CLIENT_SECRET,
            callbackURL: `${process.env.FRONTEND_BASE_URL}/auth/twitter/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await User.findOne({ 'oauth.providerId': profile.id });

                if (user) {
                    return done(null, user);
                }

                const newUser = new User({
                    email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
                    oauth: {
                        provider: 'twitter',
                        providerId: profile.id,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    },
                    avartar: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
                });

                const savedUser = await newUser.save();
                return done(null, savedUser);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

module.exports = passport;