import GoogleSignInButton from "../img/googleSigninButton.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <nav className="nav-bar">
        <h1>React Chat</h1>
        {user ? (
          <button className="sign-out" type="button" onClick={signOut}>
            SignOut
          </button>
        ) : (
          <button className="sign-in">
            <img
              onClick={signIn}
              src={GoogleSignInButton}
              alt="sign in with google"
              type="button"
            />
          </button>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
