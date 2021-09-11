import "./style.css";

function Characters({ players }) {
  const ano = new Date().getFullYear();
  return (
    <>
      {players.map((item, i) => (
        <div className="boxCard" key={i}>
          <img className="img" src={item.image} alt={item.name} />
          <p className="name">{item.name}</p>
          <p className="school">{item.house}</p>
          <span className="age">
            {item.yearOfBirth > 1000 ? (
              <p>Idade Hoje: {ano - item.yearOfBirth}</p>
            ) : (
              <p>Nascimento não informado</p>
            )}
          </span>
        </div>
      ))}
    </>
  );
}
export default Characters;
