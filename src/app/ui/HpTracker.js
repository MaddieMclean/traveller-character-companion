import { useState } from "react";

function HpTracker({ currentHp, setHp, editMode }) {
  const [hpMod, setHpMod] = useState(0);

  function handleClick() {
    setHp((currentHp) => currentHp + hpMod);
    setHpMod(0);
  }

  function updateHpMod(element) {
    setHpMod(Number(element.target.value));
  }

  if (!editMode) {
    return (
      <div>
        <p>Current HP: {currentHp}</p>
      </div>
    );
  }

  return (
    <div>
      <p>
        Modify Hit Points:{" "}
        <input type="number" value={hpMod} onChange={updateHpMod} />
      </p>
      <button onClick={handleClick}>Update Hit Points</button>
      <p>Current HP: {currentHp}</p>
    </div>
  );
}

export default HpTracker;
