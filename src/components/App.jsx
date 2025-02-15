import { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Grogu from './Grogu';
import Dice from './Dice';
import Form from './Form';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';
import Goods from './Goods';
import RestartButton from './RestartButton';
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
  const [gameStatus, setGameStatus] = useState(" el juego está en curso");

  const [name, setName] = useState("");
  

  function manageCookies(cookies) {
    if(cookies.length > 0 ) {
      setCookies(cookies.slice(1))
      setGameStatus(" has ayudado a Mando a recoger una galleta")
    } else {
      setGameStatus(" no hay más galletas")
    }
  }

  function manageEggs(eggs) {
    if(eggs.length > 0 ) {
      setEggs(eggs.slice(1))
      setGameStatus(" has ayudado a Mando a recoger una huevo")
    } else {
      setGameStatus(" no hay más huevos")
    }
  }

  function manageFrogs(frogs) {
    if(frogs.length > 0 ) {
      setFrogs(frogs.slice(1))
      setGameStatus(" has ayudado a Mando a recoger una rana")
    } else {
      setGameStatus(" no hay más ranas")
    }
  }

  function managePositionGrogu(positionGrogu) {
    if(positionGrogu < 5 ) {
      setPositionGrogu(positionGrogu +1)
      setGameStatus(" Grogu avanza una casilla")
    } else {
      setPositionGrogu(positionGrogu +1)
      setGameStatus(" Grogu ha llegado al final")
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


  useEffect(() =>{
    if (positionGrogu > 5 ){
      setGameStatus(" ¡¡Grogu se ha comido el cargamento!! Has perdido")
    }else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0 )
      setGameStatus(" ganaste, Mando completa la misión")
  },[positionGrogu, cookies, eggs, frogs])

  
  const restartGame = () => {
    setPositionGrogu(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setDice(null);
    setGameStatus(" el juego está en curso");
    setName("");
  }

  return (
    <>
    <Header/>
    
    <main className="page">
      <Routes>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/" element={ 
          <>
          <Board  positionGrogu = {positionGrogu}/> 
          <Dice rollDice={rollDice} dice={dice} gameStatus={gameStatus} name={name}/>
          <Form setName={setName} name={name}/>
          <Goods cookies={cookies} eggs={eggs} frogs={frogs}/>   
          <RestartButton restartGame={restartGame}/>
          </>
          }/>
      </Routes>
       
    </main>
    <Footer/>
    </>
  );
}

export default App;