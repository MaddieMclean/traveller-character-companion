import { db, auth } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

function SaveCharacter({ name, currentHp, id, editMode }) {
  const saveCharacter = async () => {
    // move to using setDoc so I can save specific characters
    try {
      await setDoc(doc(db, "characters", id), {
        name: name,
        hp: currentHp,
        ownerId: auth.currentUser.uid,
      });
      console.log(`Document created for ID: ${id}`);
    } catch (e) {
      console.error(`Error adding document: ${e}`);
    }
  };

  function handleClick() {
    saveCharacter();
  }

  if (!editMode) {
    return null;
  }

  return (
    <div>
      <button onClick={handleClick}>Save Character</button>
    </div>
  );
}

export default SaveCharacter;
