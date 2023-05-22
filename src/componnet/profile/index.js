import { useState } from "react";

const user = {
  name: "szu.edu",
  imageUrl:
    "https://www.szu.edu.cn/__local/4/F4/83/21D8B3BD893C8F7242DD45D62D4_BD7B1D04_154812.jpg",
  width: 192,
  height: 108,
};

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default function Profile() {
  return (
    <div className="profile-container">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{ width: user.width, height: user.height }}
      />
      <MyButton />
    </div>
  );
}
