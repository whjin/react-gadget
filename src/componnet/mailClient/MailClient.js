import { useState } from "react";
import { letters } from "./data";
import Letter from "./Letter";

export default function MailClient () {
  const [seletedIds, setSelectedId] = useState(new Set());

  const selectedCount = seletedIds.size;

  function handleToggle (toggleId) {
    const nextIds = new Set(seletedIds);
    if (nextIds.has(toggleId)) {
      nextIds.delete(toggleId);
    } else {
      nextIds.add(toggleId);
    }
    setSelectedId(nextIds);
  }

  return (
    <div className="plan-container">
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            onToggle={handleToggle}
            isSelected={seletedIds.has(letter.id)}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters.</b>
        </p>
      </ul>
    </div>
  );
}
