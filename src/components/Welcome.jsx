import React from "react";
import GoogleSignInButton from "../img/googleSigninButton.png";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import welcome from "../img/welcome.webp";
const Welcome = () => {
  const googelSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <main className="welcome">
        <h2>Welcome to React App</h2>
        <img src={welcome} alt="" width={50} height={50} />
        <p>Sign In with Google to chat with your fellow React Developers</p>
        <button className="sign-in">
          <img
            src={GoogleSignInButton}
            alt="sign in with google"
            onClick={googelSignIn}
            type="button"
          />
        </button>
      </main>
    </div>
  );
};

export default Welcome;
