import { useState } from "react";

import CharacterName from "./CharacterName";
import HpTracker from "./HpTracker";
import SaveCharacter from "./SaveCharacter";
import EditButton from "./EditButton";

function Character(props) {
  const [characterName, setCharacterName] = useState(props.name);
  const [currentHp, setHp] = useState(props.hp);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <CharacterName
        name={characterName}
        setName={setCharacterName}
        editMode={editMode}
      />
      <p>Creator ID: {props.ownerId} | Doc ID: {props.id}</p>
      <HpTracker currentHp={currentHp} setHp={setHp} editMode={editMode} />
      <SaveCharacter
        name={characterName}
        currentHp={currentHp}
        id={props.id}
        editMode={editMode}
      />
      <EditButton
        ownerId={props.ownerId}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  );
}
export default Character;
