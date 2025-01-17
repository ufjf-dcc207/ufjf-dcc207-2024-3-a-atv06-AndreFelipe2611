import { useState } from "react";
import Atributo from "./Atributo.tsx";
import "./Emoji.css";

const EMOJIS = new Map<string, string>([
  ["happy", "😎"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);



function Emoji() {
  const [situacao, setSituacao] = useState("deady");
  const [saude, setSaude] = useState(3);
  const [energia, setEnergia] = useState(3);
  const [agua, setAgua] = useState(3);
  const [comida, setComida] = useState(3);
  const [luz, setLuz] = useState(true);

  function onAlimentar() {
    setComida(Math.min(comida + 1, 5));
  }

  function OnHidratar() {
    setAgua(Math.min(agua + 1, 5));
  }

  function onLigaDesligaLuz() {
    setLuz(!luz);
  }

  function onCiclo() {
    setComida(Math.max(0, comida - 1));
    setAgua(Math.max(0, agua - 1));
    if(luz){
      setEnergia(Math.max(0, energia - 1));
    }else{
      setEnergia(Math.max(5, energia + 1));
    }
    if (comida === 0) {
      setSaude((s) => Math.max(0, s - 1));
    }
    if (agua === 0) {
      setSaude((s) => Math.max(0, s - 1));
    }
    if (energia === 0) {
      setSaude((s) => Math.max(0, s - 1));
    }
  }

  return (
    <div className="emoji">
      <div className="face">{EMOJIS.get(situacao) || "🫥"}</div>

      <div className="status">
        <Atributo emoji="❤️" valor={saude}></Atributo>
        <Atributo emoji="⚡" valor={energia}></Atributo>
        <Atributo emoji="🍖" valor={comida}></Atributo>
        <Atributo emoji="🚰" valor={agua}></Atributo>
        <span style={{filter: luz?"":"grayscale(100%)"}}>💡</span>
      </div>

      <div className="acoes">
        <button onClick={onAlimentar}>Dar comida</button>
        <button onClick={OnHidratar}>Dar água</button>
        <button onClick={onLigaDesligaLuz}>
          {luz?"Apagar ":"Acender "}
           a luz</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}

export default Emoji;














/*export default function Emoji() {
  const [situacao, setSituacao] = useState("happy");*/


  /* function toHappy() {
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
    */