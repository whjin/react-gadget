import { useImmer } from "use-immer";

export default function Form () {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
    }
  });

  function handleNameChange (e) {
    setPerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange (e) {
    setPerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange (e) {
    setPerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange (e) {
    setPerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <div className="form-container">
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </div>
  );
}