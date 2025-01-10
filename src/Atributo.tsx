import { useState } from "react";
import "./Atributo.css";

export default function Status(){
   const [valor, setValor] = useState(3);

   if(valor === 5){
    setValor(0);
   }else{
    setValor(valor + 1);
   }
   
   return <div className="status">
        <span>{valor}</span>
        <button>+</button>
    </div>
}