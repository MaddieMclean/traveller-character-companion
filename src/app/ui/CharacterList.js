import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Character from "./Character";

function CharacterList() {
  const [characterList, setCharacterList] = useState([]);

  function snapshotCallback(snapshot) {
    const characterData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCharacterList(characterData);
  }

  useEffect(() => {
    const charactersCollection = collection(db, "characters");
    const unsubscribe = onSnapshot(charactersCollection, snapshotCallback);
    return () => {
      unsubscribe();
      console.log("Listener Detached.");
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ul>
        {characterList.map((character) => (
          <li key={character.id}>
            <Character
              name={character.name}
              hp={character.hp}
              ownerId={character.ownerId}
              id={character.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
