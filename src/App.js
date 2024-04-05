
import './App.css';
import Button from './components/button';
import { useState } from 'react';

function App() {
  const [numeroAntigo,setNumeroa]=useState([])
  const [nums,setNums]=useState("")
  const [simbolos,setSimbolos]=useState("")

const armazenar = (e)=>{
 const numeroS = e.target.innerHTML
 setNums(nums+numeroS)
 console.log(nums)
 let ints = +nums
 console.log(ints)
 setNumeroa([...numeroAntigo,ints])
 
}

const deleta= ()=>{
  setNums(0)

}

const guardarSimbolo = (e)=>{
  let  simbolo  = e.target.innerHTML
  let ints = +nums
  console.log(ints)
  setNumeroa([...numeroAntigo,ints])
  setNums(0)
  console.log(numeroAntigo)
  setSimbolos(simbolo)
    

}
const calcular = ()=>{
  if(simbolos==="+"){
    let numeros =   numeroAntigo.reduce((total, currentValue) => total + currentValue, 0);
    let numeroS = numeros + ""
    setNums(numeroS)
    console.log(numeros)
  }
}


  return (
    <div className="app" >
      <h1>calculadora</h1>
      <div className='posicao'>
        <div className="numeros">
          {nums}
  
        </div>
      </div>
      <div className="calculadora">
        <div className="espaço">
        <Button onClick={armazenar} value={1}/>
        <Button onClick={armazenar} value={2}/>
        <Button onClick={armazenar} value={3}/>
       
        </div>
       <div> 
        <Button onClick={armazenar} value={4}/>
        <Button onClick={armazenar} value={5}/>
        <Button onClick={armazenar} value={6}/>
       
        </div>
       <div>
       <Button onClick={armazenar} value={7}/>
        <Button onClick={armazenar} value={8}/>
        <Button onClick={armazenar} value={9}/>
        
       </div>
      
        <div>
        <Button onClick={armazenar} value={0}/>
        <Button onClick={guardarSimbolo} value={"x"}/>
        <Button onClick={guardarSimbolo} value={"+"}/>
        </div>
      <div>
      <Button onClick={guardarSimbolo} value={"/"}/>
      <Button onClick={guardarSimbolo} value={"-"}/>
      <Button onClick={calcular} value={"="}/>
      </div>
      <Button value={"deletar"} onClick={deleta}/>
      </div>
    </div>
  );
}

export default App;
