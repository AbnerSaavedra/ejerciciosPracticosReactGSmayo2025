
import { people } from './data/dataDestacados.js';
import { getImageUrl } from './utils/utilsImg.js';

export default function ListaDestacados() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}