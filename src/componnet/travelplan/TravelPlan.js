import { useState } from "react";
import { initialTravelPlan } from "./places";

export default function TravelPlan () {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete (parentId, childId) {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    };

    setPlan({
      ...plan,
      [parentId]: nextParent
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <div className="common-container">
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
}

function PlaceTree ({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button style={{ marginLeft: '8px', cursor: 'pointer' }} onClick={() => {
        onComplete(parentId, id);
      }}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}