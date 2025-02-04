

function RestartButton({restartGame}) {

    const handleClick = (ev) => {
        ev.preventDefault();
        restartGame();
    }
  return (
    <section>
        <button className="restart-button" onClick={handleClick}>Reiniciar Juego</button>
    </section>
  )
}

export default RestartButton