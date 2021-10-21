import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import { User } from "../models/user.model";


passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) {
            throw { message: `Email ${email} not found.` };
          }
          user.comparePassword(password, (err, isMatch: boolean) => {
            if (err) throw err;
            if (isMatch) {
              return done(undefined, user);
            }
            throw { message: "Invalid email or password" };
          });
        } catch (error: any) {
          done(undefined, false, error);
        }
      }
    )
  );