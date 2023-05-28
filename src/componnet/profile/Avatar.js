import { getImageUrl } from "./utils";

export default function Avatar({ person }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      className="avatar"
      width={person.width}
      height={person.height}
    />
  );
}
