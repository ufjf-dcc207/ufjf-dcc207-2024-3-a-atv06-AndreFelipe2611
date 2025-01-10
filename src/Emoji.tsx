import { useState } from "react";
import "./Emoji.css";

const EMOJIS = new Map<string, string>([
  ["happy", "😎"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

export default function Emoji() {
  const [situacao, setSituacao] = useState("happy");

  function toHappy() {
    console.log("toHappy()!");
    setSituacao("happy");
  }

  function toSick() {
    console.log("toSick()!");
    setSituacao("sick");
  }

  function toDead() {
    console.log("toDead()!");
    setSituacao("dead");
  }

  function cicle() {
    console.log("cicle()!");
    switch (situacao) {
      case "happy":
        setSituacao("sick");
        break;
      case "sick":
        setSituacao("dead");
        break;
      case "dead": 
        setSituacao("happy");
        break;
      default:
        setSituacao("happy");
    }
  }

  


  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
    
      <div className="acoes">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toSick}>Doente</button>
        <button onClick={toDead}>Morto</button>
        <button onClick={cicle}>Ciclo da vida</button>
      </div>
      <div className="personagem">
   
      </div>
    </div>
  );
}
