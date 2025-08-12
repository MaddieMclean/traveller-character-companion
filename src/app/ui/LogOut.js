import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function LogOut() {
  async function logOut() {
    await signOut(auth);
  }
  return <button onClick={logOut}>Log Out</button>;
}
export default LogOut;
