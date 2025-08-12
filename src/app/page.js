"use client"

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import CharacterList from "./ui/CharacterList";
import LogOut from "./ui/LogOut";
import Login from "./ui/Login";
import { auth } from "./firebase";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  function updateUser() {
    if (auth.currentUser) {
      setCurrentUser(auth.currentUser.uid);
    } else {
      setCurrentUser(null);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, updateUser);
  });

  if (currentUser == null) {
    return <Login />;
  }

  return (
    <div className="App">
      <p>Current User: {auth.currentUser.uid}</p>
      <CharacterList />
      <LogOut />
    </div>
  );
}
