import { useState } from 'react'
import './App.css'
import { set } from 'mongoose';

function App() {

  //<Exercise1></Exercise1>


  const [hidden, setHidden] = useState(false);

  function handleClick() {
    setHidden(!hidden);
  }
  const [counter, setCounter] = useState(0);
  const [change, setChange] = useState(0);


  function startCounter (){
    let interval = setInterval(() => {setCounter(counter => counter+1)}, 1000);
    setChange(interval);
  }


  function stopCounter (){
    
    setChange();
  }


  return(
    <>
      <h1>Ejercicio 1</h1>
      <button className='hidde' onClick={handleClick} >Show/Hide</button>
      {hidden && (
        <h2>Welcome to react challenges</h2>

      )}


      <h1>Ejercicio 2</h1>
      <p> {parseInt(counter / 60) % 60}min : {counter%60}secs</p>
      <button style={ {backgroundColor: "green"}} onClick={startCounter} >Start</button>
      <button style={ {backgroundColor: "red"}}  >Stop</button>
      <button style={ {backgroundColor: "yellow"}} >Reset</button>
    </>
  )

}

export default App



// export function Exercise1 () {

//   const [hidden, setHidden] = useState(false);

//   function handleClick() {
//     setHidden(!hidden);
//   }

//   return(
//     <>
//       <button className='hidde' onClick={handleClick} >Show/Hide</button>
//       {hidden && (
//         <h2>Welcome to react challenges</h2>

//       )}
//     </>
//   )
// }
