import { auth } from "../firebase";

function EditButton({ ownerId, editMode, setEditMode }) {
  function handleClick() {
    setEditMode(!editMode);
  }

  if (ownerId === auth.currentUser.uid) {
    return <button onClick={handleClick}>Edit</button>;
  } else {
    return null;
  }
}

export default EditButton;
