import './Emoji.css'

const EMOJIS = new Map<string, string>([
    ["happy", "😎"],
    ["sick", "🤢"],
    ["dead", "💀"],
])


export default function Emoji(){
    let situacao = "happy";

    return(
        <div className="emoji">
        <div className='situacao'>{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="acoes">
            <button>Morto</button>
            <button>Vivo</button>
        </div>
        </div>
    ); 
}