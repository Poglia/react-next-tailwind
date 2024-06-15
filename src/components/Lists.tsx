
import { peopleList } from "@/data/peopleList";
const List = () => {
  const list = peopleList.map((person) => (
    <li key={person.id}>
      {person.name} - {person.profession}
    </li>
  ));
  const chemists = peopleList.filter(
    (person) => person.profession === "chemist"
  );
  return (
    <div>

      {chemists.length > 0 && <>
        <h3>Lista de quimicos</h3>
        <ul>
          {chemists.map(chemist => <li key={chemist.id}>{chemist.name}</li>)}
        </ul>
      </>}
      {/* <ul>{list}</ul> */}
    </div>
  );
}

export default List;
