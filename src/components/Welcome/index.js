import "./style.css";
function Wellcome({ startPlay, setStatus }) {
  const start = () => {
    startPlay();
    setStatus();
  };
  return (
    <div className="wellcome">
      <button className="btnStatus" onClick={() => start()}>
        START GAME
      </button>
    </div>
  );
}

export default Wellcome;
