import { useState } from 'react';
import './App.css';

function App() {

  const [value,setValue]=useState('');
  const [equal,setEqual]=useState('')
  const [History,setHistory]=useState([]);
  const [Hvisible, setHvisble]=useState('display hidden')

 
  function write() {
     
      const result = eval(value); 
      setEqual(result); 
      setHistory([...History, `${value}=${result}`]); 
    
  }

  
  return (
   
    <div className="App">
      <div className={Hvisible}>
       {History.map((data)=>(<div>{data}</div>))}
       </div>
    
    <div className='calculator-input'>
      <div className='calculator-data'>
      <p >{value}</p>
      <h1 >{equal}</h1>
      </div>
      <div className='btn'>
        <button  onClick={(e)=>{setValue('');setEqual('')}}>AC</button>
        <button onClick={()=>setValue(value.slice(0,-1))}>DE</button>
        <button value='.' onClick={(e)=>{setValue(value + e.target.value)}}>.</button>
        <button value='/' onClick={(e)=>{setValue(value + e.target.value)}}>/</button>
      </div>
      <div className='btn'>
        <button value='7' onClick={(e)=>{setValue(value + e.target.value)}}>7</button>
        <button value='8' onClick={(e)=>{setValue(value + e.target.value)}}>8</button>
        <button value='9' onClick={(e)=>{setValue(value + e.target.value)}}>9</button>
        <button value='*' onClick={(e)=>{setValue(value + e.target.value)}}>*</button>
      </div>
      <div className='btn'>
        <button value='4' onClick={(e)=>{setValue(value + e.target.value)}}>4</button>
        <button value='5' onClick={(e)=>{setValue(value + e.target.value)}}>5</button>
        <button value='6' onClick={(e)=>{setValue(value + e.target.value)}}>6</button>
        <button value='-' onClick={(e)=>{setValue(value + e.target.value)}}>-</button>
      </div>
      <div className='btn'>
        <button value='1' onClick={(e)=>{setValue(value + e.target.value)}}>1</button>
        <button value='2' onClick={(e)=>{setValue(value + e.target.value)}}>2</button>
        <button value='3' onClick={(e)=>{setValue(value + e.target.value)}}>3</button>
        <button value='+' onClick={(e)=>{setValue(value + e.target.value)}}>+</button>
      </div>
      <div className='btn'>
        <button value='00' onClick={(e)=>{setValue(value + e.target.value)}}>00</button>
        <button value='0' onClick={(e)=>{setValue(value + e.target.value)}}>0</button>
        <button id='equal'  onClick={write}>=</button>
        
      </div>
      <div className='history-btn' >
        <button onClick={e=>{setHvisble('display visible')}}>history</button> 
    </div>
    <div className='history-btn clear' >
        <button onClick={e=>{setHvisble('display hidden')}}>Close</button> 
        <p></p>
    </div>
    </div>
    </div>
  );
}

export default App;
