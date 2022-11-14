
export default function GameStart(props) {
    return (
        props.show ?
            <div id="game-start">
                <button id="start" onClick={props.onStart}>Começar Jogo</button>
            </div> :
            <></>
    )
}