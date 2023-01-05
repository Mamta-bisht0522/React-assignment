import React,{useState} from "react";
import '../App.css';



function CountNum(){
const [count,setCount]=useState(0)
return (
    <>
  
    <div
     id="hey" class="container" >

    <h1> Counter:{count}</h1>
    <button id= "btn1" onClick={()=>setCount(count+1)}> INCREAMENT </button> 
 
    <button id= "btn2" onClick={()=>setCount(count-1)}> DECREAMENT </button>
  
    <button id= "btn3" onClick={()=>setCount(0)}> RESET </button>
   
    </div>
    </>
)


}


export default CountNum