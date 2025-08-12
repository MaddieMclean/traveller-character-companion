import { useState, useRef, useEffect } from "react";

function CharacterName({ name, setName, editMode }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  function handleNameChange(element) {
    setName(element.target.value);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleKeyDown(element) {
    if (element.key === "Enter") {
      setIsEditing(false);
    }
  }

  function handleOnClick() {
    if (editMode) {
      setIsEditing(true);
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={handleNameChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return <h1 onClick={handleOnClick}>Character Name: {name}</h1>;
}

export default CharacterName;
