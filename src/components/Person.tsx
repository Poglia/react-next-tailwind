const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    new Date(today)
  );
};

type Props = {
  name: string;
  avatar?: string;
  roles: string[];
  address?: string;
};

const Person = (props: Props) => {
  const { avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt1yAHJ5Bpk6KuZvtgnGN42FFVOkzEqYfIg&s", name, roles, address } = props;
  const today: Date = new Date();

  return (
    <>
      <h1>
        {name} - {getWeekday(today)}
      </h1>
      <img src={avatar} alt={name} className="w-40" />

      <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </>
  );
};

export default Person;
