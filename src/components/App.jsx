import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Grogu from './Grogu';
import Dice from './Dice';
//import grogu from '../images/grogu.webp';
// setPositionGrogu(positionGrogu +1)
//       setGameStatus("Grogu avanza una casilla")
//     }else if (result === 2){

function App() {
  //JS

  //Creamos las constantes de estado que nos interesan.
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");


  

  function manageCookies(cookies) {
    if(cookies.length > 0 ) {
      setCookies(cookies.slice(1))
      setGameStatus("Has ayudado a Mando a recoger una galleta")
    } else {
      setGameStatus("No hay más galletas")
    }
  }

  function manageEggs(eggs) {
    if(eggs.length > 0 ) {
      setEggs(eggs.slice(1))
      setGameStatus("Has ayudado a Mando a recoger una huevo")
    } else {
      setGameStatus("No hay más huevos")
    }
  }

  function manageFrogs(frogs) {
    if(frogs.length > 0 ) {
      setFrogs(frogs.slice(1))
      setGameStatus("Has ayudado a Mando a recoger una rana")
    } else {
      setGameStatus("No hay más ranas")
    }
  }

  function managePositionGrogu(positionGrogu) {
    if(positionGrogu < 5 ) {
      setPositionGrogu(positionGrogu +1)
      setGameStatus("Grogu avanza una casilla")
    } else {
      setPositionGrogu(positionGrogu +1)
      setGameStatus("Grogu ha llegado al final")
    }
  }

  const rollDice = () => {
    const result = Math.ceil(Math.random() * 4);
    setDice(result);
    
    switch(result) {
      case 1:
        manageCookies(cookies);
        break;
      case 2:
        manageEggs(eggs);
        break;
      case 3:
        manageFrogs(frogs);
        break;
      case 4:
        managePositionGrogu(positionGrogu);
        break;
    }

    // if(result === 1 && cookies.length > 0){
    //   setCookies(cookies.slice(1))
    //   setGameStatus("Has ayudado a Mando a recoger una galleta")

    // }else if(result === 2 && eggs.length > 0){
    //   setEggs(eggs.slice(1))
    //   setGameStatus("Has ayudado a Mando a recoger un huevo")
      
    // }else if(result === 3 && frogs.length > 0){
    //   setFrogs(frogs.slice(1))
    //   setGameStatus("Has ayudado a Mando a recoger una rana")
      
    // }else if(result === 4 && positionGrogu < 7){
    //   setPositionGrogu(positionGrogu +1)
    //   setGameStatus("Grogu avanza una casilla")
      
    // }
  }

  

  return (
    <>
    <Header/>
    
    <main className="page">
      <Board  positionGrogu = {positionGrogu}/>

      <Dice rollDice={rollDice} dice={dice} gameStatus={gameStatus}/>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  );
}

export default App;