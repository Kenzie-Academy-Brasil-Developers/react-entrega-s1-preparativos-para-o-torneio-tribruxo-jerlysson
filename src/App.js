import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import Wellcome from "./components/Welcome";

function App() {
  const [players, setPlayers] = useState([]);
  const [students, setStudents] = useState([]);
  const [enter, setEnter] = useState(true);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(`${err}`));
  }, []);

  // ============ SEPARAÇÃO DOS TIMES POR CASAS=============
  const Gryffindor = students.filter((item) => item.house === "Gryffindor");
  const Slytherin = students.filter((item) => item.house === "Slytherin");
  const Hufflepuff = students.filter((item) => item.house === "Hufflepuff");
  const Ravenclaw = students.filter((item) => item.house === "Ravenclaw");
  let participants = [Gryffindor, Slytherin, Hufflepuff, Ravenclaw];

  // ============ STATUS DO SITE=============

  const setStatus = () => {
    setEnter(!enter);
  };

  // ============ FUNÇÃO PRA GERAR NUMERO ALEATORIO DE ACORDO O TAMAMHO DO ARRAY=============

  const numRandom = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  // ============ SEPARAÇÃO DAS CASAS DE FORMA ALEATORIA=============

  let numHouse = [];
  let player = [];
  const getHouse = () => {
    for (let idx = 0; idx < 3; idx++) {
      let num = numRandom(participants.length);
      if (numHouse.includes(num)) {
        idx--;
        num = numRandom(participants.length);
      } else {
        numHouse.push(num);
      }
    }
  };
  // ============ SEPARAÇÃO DOS REPRESENTATES DE CADA CASA"students""=============

  const startPlay = () => {
    getHouse();

    for (let idx = 0; idx < numHouse.length; idx++) {
      let i = numHouse[idx];
      let studRdm = numRandom(participants[i].length);
      player.push(participants[i][studRdm]);
    }
    setPlayers([...player]);
  };
  return (
    <>
      {enter ? (
        <div>
          <header className="App-header">
            <h1>Torneio Tribruxxo</h1>
          </header>
          <Wellcome startPlay={startPlay} setStatus={setStatus} />
        </div>
      ) : (
        <div className="App">
          <section className="container">
            <Characters players={players} />
          </section>
          <button className="btn tentar" onClick={startPlay}>
            TENTAR NOVAMENTE
          </button>
          <button className="btn exit" onClick={() => setStatus()}>
            Voltar
          </button>
        </div>
      )}
    </>
  );
}

export default App;

// TA FUNCIONANDO MAIS NAO ESTOU SATISFEITO COM O CODIGO, FALTA REFATORAR =
