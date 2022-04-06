import { Profilebody } from "./Profilebody";

import classes from "./UserProfile.module.css";
import { user } from "../../fbase";

const UserProfile = () => {
  // console.log(user);
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
  return (
    <section className={classes.profile}>
      <div className="profile-avatar">
        <img
          className="profilemain"
          src={user.photoURL}
          alt={user.displayName}
        />
      </div>

      <h3 className="text-avatar"> {user.displayName}</h3>
      <p>{user.email}</p>
      <div>
        <Profilebody />
      </div>
    </section>
  );
};

export default UserProfile;
