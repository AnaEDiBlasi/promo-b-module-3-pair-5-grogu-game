

function Dice(props) {

    const handleClick = (ev) => {
        ev.preventDefault();
        props.rollDice();
    }

  return (
    <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado</button>
        <p> El resultado del dado es: {props.dice}</p>
        <div className="game-status">{props.name}{props.gameStatus}</div>
      </section>
  )
}

export default Dice;