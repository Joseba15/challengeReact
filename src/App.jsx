import { useState } from 'react'
import './App.css'
import { set } from 'mongoose';
import ProgressBar from "./progressBar";

function App() {


  //Ejercicio 1
  const [hidden, setHidden] = useState(false);

  function handleClick() {
    setHidden(!hidden);
  }
  
  
  //Ejercicio 2
  const [counter, setCounter] = useState(0);
  const [change, setChange] = useState(0);


  function startCounter (){
    let interval = setInterval(() => {setCounter(counter => counter+1)}, 1000);
    setChange(interval);
  }


  function stopCounter (){
    clearInterval(change);
  }

  function resetCounter (){
    stopCounter();
    setCounter(0);
  }


  //Ejercicio 3
  const [taskList , setTaskList] = useState([]);

  const [taskContent, setTaskContent] = useState("");


  const handleTaskList = (e) =>{
    // setTaskList([...taskList,taskContent])
    setTaskList( taskList.push(taskContent))
  } 
  


  const list = taskList.map(tarea => <li>{tarea}</li>)



  const handleTaskContent = (e) =>{
    setTaskContent(e.target.value)
  } 

  //Ejercicio 4
  const [percentage, setPercentage] = useState('20%');

  const handlePercentage = (e) =>{
    setPercentage(e.target.value+'%')
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
      <button style={ {backgroundColor: "red"}}  onClick={stopCounter}>Stop</button>
      <button style={ {backgroundColor: "yellow"}} onClick={resetCounter} >Reset</button> 
      
      <h1>Ejercicio 3</h1>
      <form>
        <input name="task" type="text" onChange={handleTaskContent}/>
        <button type="button" onClick={handleTaskList} >Add</button>
      </form>
      <ul>
        {list}
      </ul>


      <h1>Ejercicio 4</h1>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar 
        width={percentage}/>
        <form>
          <label htmlFor="percentage">Input Percentage:</label>
          <input name="percentage" type="number" onChange={handlePercentage} />
        </form>
      </div>
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
