import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(element){
        setEmail(element.target.value)
    }

    function handlePasswordChange(element){
        setPassword(element.target.value)
    }

    async function login(){
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function newUser() {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    return <div>
        <p>Email: <input type="text" value={email} onChange={handleEmailChange}/></p>
        <p>Password: <input type="text" value={password} onChange={handlePasswordChange}/></p>
        <button onClick={login}>Login</button>
        <button onClick={newUser}>Sign Up</button>
    </div>
}

export default Login;