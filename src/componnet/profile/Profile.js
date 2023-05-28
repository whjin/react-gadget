import { useState } from "react";
import Avatar from "./Avatar";

export default function Profile() {
  const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
  ];

  const [list, setList] = useState(initialList);

  function Profile({ children }) {
    return <div className="profile-container">{children}</div>;
  }

  function Image() {
    return (
      <Avatar
        person={{
          imageUrl:
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          name: "百度一下",
          width: 192,
          height: 108,
        }}
      />
    );
  }

  function handleToggle(artworkId, nextSeen) {
    setList(
      list.map((artwork) => {
        if (artwork.id == artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={(e) => {
                  onToggle(artwork.id, e.target.checked);
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }

  function List() {
    return (
      <>
        <h1>Art Bucket List</h1>
        <h2>My list of art to see:</h2>
        <ItemList artworks={list} onToggle={handleToggle} />
      </>
    );
  }

  return (
    <Profile>
      <Image />
      <List />
    </Profile>
  );
}
