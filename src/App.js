import React from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar"
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}
    </div>
  )
}

export default App